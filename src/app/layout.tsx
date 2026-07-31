import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
