import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  origin: z.string().url().max(255).optional(),
});

const SITE_URL = 'https://moshewav.com';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const { name, email, origin } = parsed.data;

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data, error } = await supabase
      .from('vst_signups')
      .insert({ name, email: email.toLowerCase() })
      .select('id')
      .single();

    if (error || !data) {
      console.error('insert error', error);
      return new Response(JSON.stringify({ error: 'Could not create signup' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const confirmUrl = `${origin.replace(/\/$/, '')}/vst-download?token=${data.id}`;

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY missing');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; max-width: 560px;">
        <h2 style="margin-bottom: 16px;">Confirm your email to download In Motion VST</h2>
        <p>Hey ${escape(name)},</p>
        <p>Thanks for signing up. Click the button below to confirm your email and unlock your download.</p>
        <p style="margin: 28px 0;">
          <a href="${confirmUrl}" style="background:#000;color:#fff;padding:14px 22px;text-decoration:none;font-weight:bold;letter-spacing:1px;text-transform:uppercase;display:inline-block;">
            Confirm & Download
          </a>
        </p>
        <p style="color:#666;font-size:13px;">Or copy this link: <br><a href="${confirmUrl}">${confirmUrl}</a></p>
        <p style="color:#666;font-size:12px;margin-top:32px;">
          You'll also receive an email whenever Moshe releases a new song. You can unsubscribe anytime.
        </p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Moshe <noreply@moshewav.com>',
        reply_to: 'moshe.sounds@gmail.com',
        to: [email],
        subject: 'Confirm your email to download In Motion VST',
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Resend error:', res.status, text);
      return new Response(JSON.stringify({ error: 'Failed to send confirmation email' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('request-vst-download error', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
