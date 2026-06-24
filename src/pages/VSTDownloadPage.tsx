import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Loader2, CheckCircle2, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import installerAsset from "@/assets/in-motion-vst-installer.asset.json";
import { usePageTitle } from "@/hooks/usePageTitle";

type Status = "loading" | "ok" | "error";

const VSTDownloadPage = () => {
  usePageTitle("VST Download");
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [name, setName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (!token) {
        setErrorMsg("Missing confirmation token.");
        setStatus("error");
        return;
      }
      const { data, error } = await supabase.functions.invoke("confirm-vst-download", {
        body: { token },
      });
      if (cancelled) return;
      if (error || !data?.ok) {
        setErrorMsg("This confirmation link is invalid or has expired.");
        setStatus("error");
        return;
      }
      setName(data.name ?? null);
      setStatus("ok");
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleDownload = () => {
    // Asset is served from Lovable CDN. On custom domains (e.g. Netlify),
    // the relative /__l5e/ path doesn't exist, so use the absolute Lovable host.
    const assetUrl = installerAsset.url.startsWith("http")
      ? installerAsset.url
      : `https://moshemusic.lovable.app${installerAsset.url}`;
    const a = document.createElement("a");
    a.href = assetUrl;
    a.download = installerAsset.original_filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <Link
              to="/vst-learn-more"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12 border border-border"
            >
              {status === "loading" && (
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
                  <p className="text-muted-foreground">Confirming your email...</p>
                </div>
              )}

              {status === "ok" && (
                <div className="flex flex-col items-center gap-6 px-6">
                  <CheckCircle2 className="w-14 h-14 text-neon-pink" />
                  <div>
                    <h1 className="font-glassure text-3xl md:text-4xl font-bold mb-3">
                      {name ? `Thanks, ${name}!` : "Email confirmed"}
                    </h1>
                    <p className="text-muted-foreground">
                      Your email is verified. Click below to download the In Motion VST installer (Windows only).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    Download Installer
                  </button>
                </div>
              )}

              {status === "error" && (
                <div className="flex flex-col items-center gap-4 px-6">
                  <XCircle className="w-14 h-14 text-neon-pink" />
                  <h1 className="font-glassure text-3xl font-bold">Something's not right</h1>
                  <p className="text-muted-foreground">{errorMsg}</p>
                  <Link
                    to="/vst-learn-more"
                    className="mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 border border-border font-display text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Request a new link
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VSTDownloadPage;
