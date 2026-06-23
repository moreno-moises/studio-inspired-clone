import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const schema = z.object({ token: z.string().uuid() });

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: row, error: fetchErr } = await supabase
      .from('vst_signups')
      .select('id, name, email, confirmed_at')
      .eq('id', parsed.data.token)
      .maybeSingle();

    if (fetchErr || !row) {
      return new Response(JSON.stringify({ error: 'Invalid or expired link' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const wasAlreadyConfirmed = !!row.confirmed_at;

    if (!wasAlreadyConfirmed) {
      await supabase
        .from('vst_signups')
        .update({ confirmed_at: new Date().toISOString() })
        .eq('id', row.id);

      // Notify owner of confirmed signup (silent, best-effort)
      const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
      if (RESEND_API_KEY) {
        const notifyHtml = `
          <div style="font-family: Arial, sans-serif; color: #111;">
            <h2>New confirmed VST signup</h2>
            <p><strong>Name:</strong> ${escape(row.name)}</p>
            <p><strong>Email:</strong> ${escape(row.email)}</p>
          </div>
        `;
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Moshe <noreply@moshewav.com>',
            to: ['moshe.sounds@gmail.com'],
            reply_to: row.email,
            subject: `Confirmed VST signup: ${row.name}`,
            html: notifyHtml,
          }),
        }).catch((e) => console.error('notify error', e));
      }
    }

    return new Response(JSON.stringify({ ok: true, name: row.name }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('confirm-vst-download error', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
