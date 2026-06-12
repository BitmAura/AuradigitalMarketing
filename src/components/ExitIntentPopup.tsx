"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, Gift, CheckCircle2, Loader2 } from "lucide-react";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    // Show after 45 seconds if not shown yet
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasBeenShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");
      setIsSuccess(true);

      // Auto-close after 3 seconds
      setTimeout(() => setIsVisible(false), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />

      {/* Popup */}
      <div className="relative w-full max-w-lg">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800">
          {/* Gradient header bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-aura-500 via-emerald-500 to-aura-500" />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-aura-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-emerald-500/5 blur-3xl" />

          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Close popup"
          >
            <X size={16} />
          </button>

          <div className="relative p-8 sm:p-10 text-center">
            {isSuccess ? (
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                  <CheckCircle2 className="text-white" size={28} />
                </div>
                <h3 className="text-display-sm font-bold text-slate-900 dark:text-white mb-2">
                  You&apos;re on the list! 🎉
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We&apos;ll send your personalised growth audit within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-aura-500 to-emerald-500 shadow-lg shadow-aura-500/20">
                  <Gift className="text-white" size={28} />
                </div>

                <h3 className="text-display-sm font-bold text-slate-900 dark:text-white mb-3">
                  Want a Free Growth Audit?
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-sm mx-auto">
                  Get a comprehensive analysis of your current digital strategy with actionable recommendations —{" "}
                  <span className="font-semibold text-aura-600 dark:text-aura-400">completely free</span>.
                </p>

                {error && (
                  <p className="text-xs text-red-500 mb-3">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-aura-500/20 hover:shadow-xl hover:shadow-aura-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get My Free Audit
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
