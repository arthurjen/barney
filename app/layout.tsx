import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { UserProvider } from "@auth0/nextjs-auth0/client";
// import { withPageAuthRequired, AppRouterPageRoute } from "@auth0/nextjs-auth0";
import Nav from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "LX: %s",
    default: "LX", // a default is required when creating a template
  },
  description: "Magic: the Gathering Card Lending app by Cherry City Gaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        {/* <UserProvider> */}
        <body className={inter.className}>
          <Nav />
          {children}
          </body>
        {/* </UserProvider> */}
    </html>
  );
}
// export default withPageAuthRequired(RootLayout, { returnTo: "/" });
