import NextAuth from "next-auth";

import Discord from "next-auth/providers/discord";
import type { NextAuthConfig, Session as _Session } from "next-auth";
import { JWT } from "next-auth/jwt";

import FirebaseApp from "./firebase/config";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";

export const config = {
  providers: [
    Discord({
      authorization:
        "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds+guilds.members.read",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (token && account && profile) {
        try {
          let result = {};
          const db = getFirestore(FirebaseApp);
          let docRef = doc(db, `users/${profile.id}`);

          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists()) {
            result = docSnapshot.data();
          } else {
            await setDoc(docRef, {
              id: profile.id,
              name: profile.global_name,
              email: profile.email,
              image: profile.image_url,
              lentCount: 0,
              borrowedCount: 0,
              date: Date.now(),
            });
          }
        } catch (error) {
          throw error;
        }

        token.id = profile.id;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: _Session; token?: JWT }): Promise<Session> {
      const sessionWithToken = Object.assign({}, session) as Session;

      if (token && token.id) {
        sessionWithToken.user.id = token.id as string;
        sessionWithToken.accessToken = token.accessToken as string;
      }
      
      return sessionWithToken;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (
        pathname === "/profile" ||
        pathname === "/borrow" ||
        pathname === "/people"
      )
        return !!auth;
      return true;
    },
  },
  // pages: { TODO: replace signin page
  //   signIn: "/auth/signin",
  // },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
