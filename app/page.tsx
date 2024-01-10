import { Metadata } from "next";
import BorrowPage from "./borrow-page";

export const metadata: Metadata = {
  title: "LX: Cards",
};

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary px-8 justify-between font-nuform">
      <BorrowPage />
    </main>
  );
}
