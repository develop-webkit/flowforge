import { Sparkles } from "lucide-react";

const groups = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "Support", "Status"] },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 py-14 dark:border-white/5">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            Nova
          </a>
          <p className="mt-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            The all-in-one platform that helps modern teams ship products faster.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-sm font-semibold">{g.title}</h4>
            <ul className="mt-4 space-y-2">
              {g.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 dark:border-white/5 dark:text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Nova. Demo project — not a real product.</p>
        <p>Built with Next.js, TypeScript, Tailwind &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
