import type { Metadata } from "next";
import "./globals.css";
import HomeContent from "./components/home-content";
import { cookies } from "next/headers";
import { GeistSans } from "geist/font/sans";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Partilhe os seus textos | texto.space",
  description: "Copy & Paste platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = cookies();
  const currentTheme = store.get("theme")?.value || "dark";
  return (
    <html lang="en" suppressHydrationWarning className={currentTheme}>
      <body className={GeistSans.className + " overflow-hidden"}>
        <Navbar path="/" />
        <HomeContent />
        {children}
      </body>
    </html>
  );
}
