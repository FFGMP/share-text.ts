import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavMenu } from "./components/navBar";
import { ThemeProvider } from "./theme-provider";
import HomeDivRoomInput from "./components/homeDivRoomInput";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " overflow-hidden"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <HomeDivRoomInput />
          <NavMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
