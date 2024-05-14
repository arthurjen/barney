import { Metadata } from "next";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { DISCORD } from "@/app/api/discord"

export const metadata: Metadata = {
  title: "barney: borrow",
};

export default async function Home() {
  const session = await auth();
  if (!session?.user) redirect("/signin");
  else {
    const member = await DISCORD.getMember();
    console.log("member roles", member.roles);
    const roles = await DISCORD.getGuildRoles();
    console.log("roles", roles);
    
    if (member.roles.includes("1239676172191793253")) redirect("/borrow");
    else redirect("/ccgplus");

  }
}
