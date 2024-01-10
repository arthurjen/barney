import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import Header from "@/components/header";
import SignInPage from "./signin";
import { auth } from "auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "LX: %s",
    default: "LX", // a default is required when creating a template
  },
  description: "Magic: the Gathering Card Lending app by Cherry City Gaming",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`overflow-hidden ${inter.className}`}>
        {session?.user ? (
          <SessionProvider session={session}>
            <Header />
            {children}
            <Nav />
          </SessionProvider>
        ) : (
          <SignInPage />
        )}
      </body>
    </html>
  );
}
