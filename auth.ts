import NextAuth from "next-auth";

import Discord from "next-auth/providers/discord";
import type { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "./public/logo.svg",
  },
  providers: [Discord],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      console.log("pathname", pathname);
      if (pathname === "/profile") return !!auth;
      return true;
    },
  },
  // pages: {
  //   signIn: "/auth/signin",
  // },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
