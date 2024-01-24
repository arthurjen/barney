import { Metadata } from "next";
import BorrowPage from "./borrow-page";

export const metadata: Metadata = {
  title: "borrow",
};

export default function People() {
  return <BorrowPage />;
}
