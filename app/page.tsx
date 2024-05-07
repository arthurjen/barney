import { Metadata } from "next";
import { auth } from "auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "barney: borrow",
};

export default async function Home() {
  const session = await auth();
  if (!session?.user) redirect("/signin");
  else redirect("/borrow");
}
