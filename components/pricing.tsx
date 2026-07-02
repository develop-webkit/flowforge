"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 23,
    desc: "For your first automation.",
    features: ["2 active workflows", "5,000 executions / mo", "Standard API connections", "Email support"],
    cta: "Book a call",
    featured: false,
  },
  {
    name: "Growth",
    monthly: 99,
    yearly: 79,
    desc: "For teams scaling automations.",
    features: ["15 active workflows", "50,000 executions / mo", "Custom API + webhook connections", "Monitoring & alerts", "Priority support"],
    cta: "Book a call",
    featured: true,
  },
  {
    name: "Scale",
    monthly: 299,
    yearly: 239,
    desc: "For business-critical workloads.",
    features: ["Unlimited workflows", "500,000 executions / mo", "Dedicated automation engineer", "SSO + audit logs", "99.9% uptime SLA"],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Pay for what you run</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Build fees are one-time and scoped per project. Hosting is billed monthly by usage.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 p-1 dark:border-white/10">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn("rounded-full px-4 py-1.5 text-sm font-medium transition", !yearly ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-600 dark:text-slate-300")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn("rounded-full px-4 py-1.5 text-sm font-medium transition", yearly ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-600 dark:text-slate-300")}
            >
              Yearly <span className="text-emerald-500">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                t.featured
                  ? "border-indigo-500/60 bg-gradient-to-b from-indigo-500/[0.08] to-transparent shadow-xl shadow-indigo-500/10"
                  : "border-slate-200 dark:border-white/10"
              )}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <motion.span
                  key={yearly ? "y" : "m"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl font-bold"
                >
                  ${yearly ? t.yearly : t.monthly}
                </motion.span>
                <span className="mb-1 text-sm text-slate-500 dark:text-slate-400">/mo hosting</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                    <span className="text-slate-600 dark:text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={cn(
                  "mt-8 rounded-xl px-5 py-3 text-center text-sm font-medium transition",
                  t.featured
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90"
                    : "border border-slate-200 hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5"
                )}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Need more? Additional executions are billed at $1 per 1,000. Cancel or change plans anytime.
        </p>
      </div>
    </section>
  );
}
