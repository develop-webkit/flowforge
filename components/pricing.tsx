"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    desc: "For individuals getting started.",
    features: ["1 workspace", "Up to 3 automations", "Community support"],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Pro",
    monthly: 24,
    yearly: 19,
    desc: "For growing teams that ship fast.",
    features: ["Unlimited automations", "Real-time analytics", "100+ integrations", "Priority support"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: 79,
    yearly: 64,
    desc: "For organizations at scale.",
    features: ["SSO & SAML", "Advanced security", "Dedicated manager", "99.99% uptime SLA"],
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Start free. Upgrade when you grow.</p>

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
                <span className="mb-1 text-sm text-slate-500 dark:text-slate-400">/mo</span>
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
      </div>
    </section>
  );
}
