import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { name, email } = parsed.data;
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY missing');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const escape = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111;">
        <h2 style="margin-bottom: 16px;">New VST Download Signup</h2>
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p style="color:#666; font-size:12px; margin-top:24px;">
          Sent automatically from the In Motion site.
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
        from: 'In Motion <onboarding@resend.dev>',
        to: ['moshe.sounds@gmail.com'],
        reply_to: email,
        subject: `New VST signup: ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Resend error:', res.status, text);
      return new Response(JSON.stringify({ error: 'Failed to send' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('notify-vst-signup error', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
