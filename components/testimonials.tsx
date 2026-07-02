import { Reveal } from "@/components/reveal";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "FlowForge automated our order-to-fulfilment process end to end. What our ops team spent 15 hours a week on now runs itself.", name: "Sarah Chen", role: "Head of Ops, Northwind" },
  { quote: "They connected our CRM, Stripe, and a custom internal API in days. The managed hosting means we never think about uptime.", name: "Marcus Reed", role: "Founder, Latchpad" },
  { quote: "Usage-based pricing is exactly right for us — we only pay for what runs, and the run-history dashboard is genuinely useful.", name: "Priya Nair", role: "CTO, Kettle & Co." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">Customers</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Teams that stopped doing it by hand</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-slate-700 dark:text-slate-200">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-semibold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
