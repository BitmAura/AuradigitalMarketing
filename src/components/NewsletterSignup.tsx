"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setEmail("");
      }, 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-aura-950 via-aura-900 to-slate-900 dark:from-aura-950 dark:via-aura-900 dark:to-black py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-aura-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-dots opacity-30" />
      </div>

      <div className="container-main relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-aura-400/20 bg-aura-400/10 px-4 py-1.5 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-aura-300">
              Stay Ahead of the Curve
            </span>
          </div>

          <h2 className="text-display-sm sm:text-display-md text-white font-bold mb-4">
            Get Weekly AI Growth Insights
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Join 5,000+ founders and marketers who get our latest strategies on AI automation, digital marketing, and business growth.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={24} />
              <span className="text-emerald-300 font-medium">
                You&apos;re subscribed! Check your inbox.
              </span>
            </div>
          ) : status === "error" ? (
            <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-red-500/10 border border-red-500/20">
              <span className="text-red-300 font-medium text-sm">
                Something went wrong. Please try again or email us directly.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-aura-500 focus:border-aura-500 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aura-500 to-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-aura-500/20 hover:shadow-xl hover:shadow-aura-500/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Free
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-slate-500">
            No spam, ever. Unsubscribe anytime. Read our{" "}
            <a href="/privacy" className="text-aura-400 hover:text-aura-300 underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
