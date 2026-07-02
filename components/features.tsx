import { Reveal } from "@/components/reveal";
import { Bot, Gauge, Lock, LineChart, Puzzle, Workflow } from "lucide-react";

const features = [
  { icon: Bot, title: "AI automations", desc: "Describe a task in plain English and let Nova build the workflow for you." },
  { icon: Workflow, title: "Visual builder", desc: "Drag, drop, and connect steps to design pipelines without writing code." },
  { icon: LineChart, title: "Real-time analytics", desc: "Track every metric that matters with dashboards that update live." },
  { icon: Puzzle, title: "100+ integrations", desc: "Connect the tools your team already uses in a couple of clicks." },
  { icon: Lock, title: "Enterprise security", desc: "SOC 2 Type II, SSO, and role-based access control out of the box." },
  { icon: Gauge, title: "Blazing fast", desc: "Edge-rendered and optimized for a 95+ Lighthouse score everywhere." },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">Features</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your team needs to move faster
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A single platform that replaces a dozen disconnected tools.
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
