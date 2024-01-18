import { Metadata } from "next";
import BorrowPage from "./borrow-page";
import { auth } from "auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "barney: borrow",
};

export default async function Home() {
  const session = await auth();
  if (!session?.user) redirect("/api/auth/signin");
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary px-8 justify-between font-nuform">
      <BorrowPage />
    </main>
  );
}
