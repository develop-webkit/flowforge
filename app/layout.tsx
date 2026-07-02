import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nova — Ship products faster with AI",
  description:
    "Nova is the all-in-one platform that helps modern teams automate workflows, ship faster, and scale with confidence. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  keywords: ["SaaS", "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  openGraph: {
    title: "Nova — Ship products faster with AI",
    description: "The all-in-one platform for modern teams.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
