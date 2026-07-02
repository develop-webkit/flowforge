import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Brand } from "@/components/brand";
import { Footer } from "@/components/footer";

interface LegalShellProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalShell({ title, updated, children }: LegalShellProps) {
  return (
    <>
      <header className="border-b border-slate-100 dark:border-white/5">
        <div className="container flex h-16 items-center justify-between">
          <Brand href="/" />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      <main className="container max-w-3xl py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Last updated: {updated}</p>
        <div className="mt-10 space-y-8 leading-relaxed text-slate-700 dark:text-slate-300">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
