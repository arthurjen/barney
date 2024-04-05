import { Metadata } from "next";
import BorrowPage from "./borrow-page";
import {
  getPeople,
  getBorrowerTransactions,
  getOwnerTransactions,
} from "@/app/api/database";
import { auth } from "auth";

export const metadata: Metadata = {
  title: "borrow",
};

export default async function Borrow() {
  const session = await auth();
  if (!session) return;
  const { user } = session;
  const people = await getPeople();
  const borrowerTransactions = await getBorrowerTransactions(user.id);
  const ownerTransactions = await getOwnerTransactions(user.id);
  return (
    <BorrowPage
      people={people}
      borrowerTransactions={Object.values(borrowerTransactions)}
      ownerTransactions={Object.values(ownerTransactions)}
      user={session.user}
    />
  );
}
