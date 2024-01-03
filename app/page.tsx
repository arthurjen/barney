import { Metadata } from "next";
import BorrowPage from "./borrow-page";

export const metadata: Metadata = {
  title: "LX: Cards",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BorrowPage />
    </main>
  );
}
