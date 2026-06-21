import { useState } from "react";
import { z } from "zod";
import { Download } from "lucide-react";
import installerAsset from "@/assets/in-motion-vst-installer.asset.json";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);

    try {
      const existing = JSON.parse(localStorage.getItem("vst_signups") || "[]");
      existing.push({ ...parsed.data, at: new Date().toISOString() });
      localStorage.setItem("vst_signups", JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    // Trigger download
    const a = document.createElement("a");
    a.href = installerAsset.url;
    a.download = installerAsset.original_filename;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setOpen(false);
    setName("");
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-glassure text-2xl">Download In Motion VST</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your name and email to download the installer (Windows only).
          </DialogDescription>
        </DialogHeader>
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
              className="w-full bg-transparent border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
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
              className="w-full bg-transparent border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
              required
            />
          </div>
          {error && <p className="text-sm text-neon-pink">{error}</p>}
          <p className="text-xs text-muted-foreground leading-relaxed">
            By downloading, you'll receive an email whenever a new Moshe song is released. You can unsubscribe at any time.
          </p>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Installer
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VSTDownloadDialog;
