import type { Metadata } from "next";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-context";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Miners — Built on solid ground",
  description:
    "A production-ready foundation for building focused digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ThemeProvider><SiteHeader />{children}<SiteFooter /></ThemeProvider></body>
    </html>
  );
}
