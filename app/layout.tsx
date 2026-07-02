import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FlowForge — Custom n8n workflows, built & hosted for you",
  description:
    "FlowForge builds custom n8n automation workflows for your business, connects them to your APIs, and hosts them on managed infrastructure — billed by monthly usage. Simple setup, no node-wrangling.",
  keywords: ["n8n", "automation", "workflows", "API integration", "managed hosting", "no-code", "SaaS"],
  openGraph: {
    title: "FlowForge — Custom n8n workflows, built & hosted for you",
    description: "Done-for-you n8n automations: simple setup, API attachment, and managed hosting billed by monthly usage.",
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
