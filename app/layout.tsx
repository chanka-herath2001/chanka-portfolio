import type { Metadata } from "next";
import { Archivo, Noto_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const serif = Noto_Serif_Display({ subsets: ["latin"], axes: ["wdth"], variable: "--font-noto-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Chanka Herath — Software Engineer",
  description:
    "Portfolio of Chanka Herath — full-stack software engineer working across web, cloud and machine learning. First Class Honours, BEng Software Engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="hq" className={`${archivo.variable} ${serif.variable} ${mono.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
