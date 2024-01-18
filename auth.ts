import NextAuth from "next-auth";

import Discord from "next-auth/providers/discord";

import type { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [Discord],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
  },
  // pages: {
  //   signIn: "/auth/signin",
  // },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
