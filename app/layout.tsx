import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chanka Herath | Software Engineer",
  description: "Portfolio of Chanka Herath – Full-Stack Software Engineer, ML enthusiast, and First Class Honours graduate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
