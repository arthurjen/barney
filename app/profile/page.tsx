import { Metadata } from "next";
import ProfileClient from './profile-client';
import { auth } from "auth";

export const metadata: Metadata = {
  title: "profile",
};
export default async function Profile() {
  const session = await auth();

  return <ProfileClient session={session} />;
}
