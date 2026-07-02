import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 px-8 py-16 text-center text-white sm:px-16">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Tell us what you want to automate
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-indigo-100">
                Book a free 20-minute scoping call. We&apos;ll tell you exactly what your workflow will
                cost to build and run — no obligation.
              </p>
              <a
                href="#pricing"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-indigo-700 transition hover:bg-indigo-50"
              >
                Book a scoping call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
