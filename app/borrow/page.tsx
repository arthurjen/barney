import { Metadata } from "next";
import BorrowPage from "./borrow-page";
import { getPeople, getTransactions } from "@/app/api/database";
import queryData from "@/firebase/firestore/queryData";
import { auth } from "auth";

export const metadata: Metadata = {
  title: "borrow",
};

export default async function Borrow() {
  const session = await auth();
  const people = await getPeople();
  const transactions = await getTransactions("AAVUYtrb6RdHBdNnv5S2");
  return <BorrowPage people={people} transactions={transactions} />;
}
