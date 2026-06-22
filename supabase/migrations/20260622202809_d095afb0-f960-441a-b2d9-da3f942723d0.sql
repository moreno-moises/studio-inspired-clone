
CREATE TABLE public.vst_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX vst_signups_email_idx ON public.vst_signups (email);
GRANT ALL ON public.vst_signups TO service_role;
ALTER TABLE public.vst_signups ENABLE ROW LEVEL SECURITY;
-- No policies: table is locked to anon/authenticated. Only edge functions (service_role) access it.
