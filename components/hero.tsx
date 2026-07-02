"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

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
          href="#features"
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
          <span className="text-slate-600 dark:text-slate-300">Loved by 4,000+ teams</span>
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Ship products faster with <span className="text-gradient">AI-powered</span> workflows
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
        >
          Nova unifies your planning, automation, and analytics in one beautiful workspace —
          so your team can focus on building, not busywork.
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
            Start for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
          >
            <Play className="h-4 w-4" />
            Watch demo
          </a>
        </motion.div>

        {/* app preview mock */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="glass mt-16 w-full max-w-4xl rounded-2xl p-2 shadow-2xl"
        >
          <div className="rounded-xl bg-slate-950/90 p-4">
            <div className="mb-4 flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Active users", value: "24,318", trend: "+12.4%" },
                { label: "Automations run", value: "1.2M", trend: "+38%" },
                { label: "Time saved", value: "9,240h", trend: "+21%" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-xs text-slate-400">{s.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{s.value}</p>
                  <p className="mt-1 text-xs text-green-400">{s.trend}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-28 items-end gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
              {[40, 65, 45, 80, 60, 95, 70, 100, 85].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.05 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-violet-400"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
