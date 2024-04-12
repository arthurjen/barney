import { Metadata } from "next";
import ProfileClient from "./profile-client";
import { auth } from "auth";
import { PEOPLE } from "../api/database";

export const metadata: Metadata = {
  title: "profile",
};
export default async function Profile() {
  const session = await auth();
  const id = session?.user.id;
  if (!id) return;
  
  const person = await PEOPLE.getPerson(id);
  return <ProfileClient person={person[id]} />;
}
