import NextAuth from "next-auth";

import Discord from "next-auth/providers/discord";
import type { NextAuthConfig, Profile, Account } from "next-auth";
import { JWT } from "next-auth/jwt"

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
  // adapter: FirestoreAdapter(),
  providers: [Discord],
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account: Account;
      profile: Profile;
    }) {
      if (token && account && profile) {
        try {
          let result = {};
          const db = getFirestore(FirebaseApp);
          let docRef = doc(db, `users/${profile.id}`);

          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists()) {
            result = docSnapshot.data();
            console.log("user", result);
          } else {
            console.log("user first time sign in ");
            await setDoc(docRef, {
              id: profile.id,
              name: profile.global_name,
              email: profile.email,
              image: profile.image_url,
              karma: 0,
              date: Date.now(),
            });
          }
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(error);
        }

        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = token.id
      
      return session
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
// account {
//   token_type: 'bearer',
//   access_token: 'wGbfxuOdxILcTmaUOe4ai1luLvizdv',
//   expires_in: 604800,
//   refresh_token: 'K9VmIJKnvhcv3ytDNtbAMb4hPCkN1b',
//   scope: 'email identify',
//   expires_at: 1711646341,
//   provider: 'discord',
//   type: 'oauth',
//   providerAccountId: '150743087751102464'
// }
// profile {
//   id: '150743087751102464',
//   username: 'wallarooo',
//   avatar: 'a8cd30649a9f69a4fb1626a2ea47ee2b',
//   discriminator: '0',
//   public_flags: 0,
//   premium_type: 0,
//   flags: 0,
//   banner: null,
//   accent_color: null,
//   global_name: 'wallaroo',
//   avatar_decoration_data: null,
//   banner_color: null,
//   mfa_enabled: false,
//   locale: 'en-US',
//   email: 'arthurljen@gmail.com',
//   verified: true,
//   image_url: 'https://cdn.discordapp.com/avatars/150743087751102464/a8cd30649a9f69a4fb1626a2ea47ee2b.png'
// }
