import Image from "next/image";
import { Metadata } from "next";
import Modal from "./components/modal";

export const metadata: Metadata = {
  title: "LX: Cards",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Modal />
    </main>
  );
}
