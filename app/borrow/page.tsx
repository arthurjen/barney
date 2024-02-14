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
  const people = await getPeople();
  const borrowerTransactions = await getBorrowerTransactions(
    "AAVUYtrb6RdHBdNnv5S2"
  );
  const ownerTransactions = await getOwnerTransactions("AAVUYtrb6RdHBdNnv5S2");
  return (
    <BorrowPage
      people={people}
      borrowerTransactions={borrowerTransactions}
      ownerTransactions={ownerTransactions}
      user={session?.user}
    />
  );
}
