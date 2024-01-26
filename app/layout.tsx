import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "barney: %s",
    default: "barney", // a default is required when creating a template
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
      <body className={`overflow-hidden ${inter.className}`}>
        <main className="flex min-h-screen flex-col items-center bg-secondary font-nuform">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
