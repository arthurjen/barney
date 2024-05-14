import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import type { Viewport } from "next";
const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#7F14B1",
};

export const metadata: Metadata = {
  title: {
    template: "barney: %s",
    default: "barney",
  },
  description: "a borrow & lending app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center min-h-screen bg-secondary font-nuform">
          <Navbar />
          <div className="w-full px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
