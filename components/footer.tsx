import { Brand } from "@/components/brand";

const groups = [
  { title: "Product", links: [{ label: "How it works", href: "#how" }, { label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "Customers", href: "#testimonials" }] },
  { title: "Company", links: [{ label: "About", href: "#" }, { label: "Blog", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#" }] },
  { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Security", href: "#" }, { label: "Status", href: "#" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 py-14 dark:border-white/5">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Brand href="/" />
          <p className="mt-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            Custom n8n automation workflows — built, connected, and hosted for growing teams.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-sm font-semibold">{g.title}</h4>
            <ul className="mt-4 space-y-2">
              {g.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 dark:border-white/5 dark:text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} FlowForge. All rights reserved.</p>
        <p>Built on n8n · Hosted on secure, auto-scaling infrastructure.</p>
      </div>
    </footer>
  );
}
