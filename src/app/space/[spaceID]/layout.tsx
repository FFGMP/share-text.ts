import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partilhe os seus textos | texto.space",
  description: "Copy & Paste platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = cookies();
  const currentTheme = cookiesStore.get("theme")?.value || "dark";
  return (
    <div lang="en" className={currentTheme}>
      <div className={inter.className + " overflow-hidden"}>{children}</div>
    </div>
  );
}
