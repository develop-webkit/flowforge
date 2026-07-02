import { Reveal } from "@/components/reveal";

const brands = ["Acme", "Globex", "Umbrella", "Initech", "Hooli", "Stark", "Wayne", "Wonka"];

export function LogoCloud() {
  return (
    <section className="border-y border-slate-100 py-10 dark:border-white/5">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Trusted by fast-moving teams around the world
          </p>
        </Reveal>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="text-xl font-semibold tracking-tight text-slate-400 dark:text-slate-500"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
