import { Reveal } from "@/components/reveal";
import { Blocks, Boxes, Cable, Gauge, LineChart, ShieldCheck } from "lucide-react";

const features = [
  { icon: Blocks, title: "Done-for-you setup", desc: "Share your process; we design and build the full n8n workflow. No nodes to wire up yourself." },
  { icon: Cable, title: "API attachment", desc: "Connect any app or internal API — OAuth, webhooks, REST, GraphQL, and custom nodes included." },
  { icon: Boxes, title: "Managed hosting", desc: "We run your workflows on isolated, auto-scaling infrastructure. No servers for you to babysit." },
  { icon: LineChart, title: "Usage-based billing", desc: "Pay for the executions you actually run each month. Clear limits, no surprise invoices." },
  { icon: ShieldCheck, title: "Secure by default", desc: "Encrypted credentials, isolated tenants, audit logs, and EU/US data residency options." },
  { icon: Gauge, title: "Monitoring & alerts", desc: "Live run history, retries, and Slack/email alerts the moment a workflow needs attention." },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">Features</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Automation, handled end to end
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            From the first workflow to hosting and monitoring — we own the whole stack so you don&apos;t have to.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-500/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white transition group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
