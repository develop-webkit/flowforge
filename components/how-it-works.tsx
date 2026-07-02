import { Reveal } from "@/components/reveal";

const steps = [
  { n: "01", title: "Share your process", desc: "Hop on a 20-minute call or send a Loom. We scope the automation and the APIs it needs to touch." },
  { n: "02", title: "We build & connect", desc: "We design the n8n workflow, wire up your APIs and credentials, and test it against real data." },
  { n: "03", title: "We host & monitor", desc: "Your workflow goes live on managed hosting. You pay monthly for the executions you run — that's it." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">From idea to live automation in days</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-slate-200 p-8 dark:border-white/10">
                <span className="text-5xl font-bold text-gradient">{s.n}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
