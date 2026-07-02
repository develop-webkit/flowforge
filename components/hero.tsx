"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const nodes = ["Trigger", "Enrich", "AI step", "Your API", "Notify"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl animate-blob" />
        <div className="absolute right-1/4 top-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute left-1/2 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container flex flex-col items-center text-center">
        <motion.a
          href="#testimonials"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
        >
          <span className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </span>
          <span className="text-slate-600 dark:text-slate-300">Trusted by 120+ teams running on n8n</span>
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Custom <span className="text-gradient">n8n workflows</span>, built &amp; hosted for you
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
        >
          Tell us the process you want to automate. We design the n8n workflow, connect it to your
          APIs, and run it on managed hosting — you just pay for what you use each month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Book a free scoping call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
        >
          {["No node-wrangling", "Your APIs connected", "Managed hosting"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {t}
            </span>
          ))}
        </motion.div>

        {/* workflow preview mock */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="glass mt-16 w-full max-w-4xl rounded-2xl p-2 shadow-2xl"
        >
          <div className="rounded-xl bg-slate-950/90 p-6">
            <div className="mb-5 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400">order-sync.workflow</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {nodes.map((n, i) => (
                <div key={n} className="flex items-center gap-2 sm:gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                    className="rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-3 py-2 text-xs font-medium text-indigo-200"
                  >
                    {n}
                  </motion.div>
                  {i < nodes.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 20 }}
                      transition={{ duration: 0.3, delay: 0.7 + i * 0.12 }}
                      className="hidden h-px bg-gradient-to-r from-indigo-400/60 to-violet-400/60 sm:block"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Executions this month", value: "48,210" },
                { label: "Success rate", value: "99.98%" },
                { label: "Avg. run time", value: "1.4s" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-xs text-slate-400">{s.label}</p>
                  <p className="mt-1 text-xl font-semibold text-white">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
