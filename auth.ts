import NextAuth from "next-auth";

import Discord from "next-auth/providers/discord";
import type { NextAuthConfig, Session } from "next-auth";
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
  providers: [Discord],
  session: {
    strategy: 'jwt',
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
            console.log('user exists', result);
          } else {
            await setDoc(docRef, {
              id: profile.id,
              name: profile.global_name,
              email: profile.email,
              image: profile.image_url,
              lentCount: 0,
              borrowedeCount: 0,
              date: Date.now(),
            });
          }
        } catch (error) {
          throw error;
        }

        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session, token?: JWT }) {
      if (token && token.id) {
        session.user.id = token.id as string;
      }

      return session;
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
