import { Metadata } from "next";
import ProfileClient from "./profile-client";
import { auth } from "auth";
import { getPerson } from "../api/database";

export const metadata: Metadata = {
  title: "profile",
};
export default async function Profile() {
  const session = await auth();
  const id = session?.user.id;
  if (!id) return;
  
  const person = await getPerson(id);
  return <ProfileClient session={session} person={person} />;
}
