import { Reveal } from "@/components/reveal";

const tools = ["Slack", "Stripe", "HubSpot", "Notion", "Gmail", "Airtable", "Shopify", "OpenAI", "Twilio", "Google Sheets"];

export function LogoCloud() {
  return (
    <section className="border-y border-slate-100 py-10 dark:border-white/5">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Connect the tools and APIs you already run
          </p>
        </Reveal>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...tools, ...tools].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap text-xl font-semibold tracking-tight text-slate-400 dark:text-slate-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
