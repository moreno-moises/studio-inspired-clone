import { useState } from "react";
import { z } from "zod";
import { Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
});

interface VSTDownloadDialogProps {
  trigger: React.ReactNode;
}

const VSTDownloadDialog = ({ trigger }: VSTDownloadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setError(null);
    setSent(false);
    setSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    setSubmitting(true);

    const { error: fnError } = await supabase.functions.invoke("request-vst-download", {
      body: { ...parsed.data, origin: window.location.origin },
    });

    setSubmitting(false);
    if (fnError) {
      setError("Something went wrong sending your confirmation email. Please try again.");
      return;
    }
    setSent(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setTimeout(reset, 200);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-glassure text-2xl">
            {sent ? "Check your inbox" : "Download In Motion VST"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {sent
              ? `We sent a confirmation link to ${email}. Click it to unlock your download.`
              : "Enter your name and email. We'll send a confirmation link to verify your email before unlocking the download (Windows only)."}
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center py-6">
              <Mail className="w-12 h-12 text-neon-pink" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Didn't get it? Check your spam folder, or close this and try again.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                disabled={submitting}
                className="w-full bg-transparent border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
                required
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                disabled={submitting}
                className="w-full bg-transparent border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
                required
              />
            </div>
            {error && <p className="text-sm text-neon-pink">{error}</p>}
            <p className="text-xs text-muted-foreground leading-relaxed">
              By downloading, you'll receive your download link and occasional emails about new music, plugins, and updates from Moshe. You can unsubscribe at any time.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Send Confirmation Email
                </>
              )}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VSTDownloadDialog;
