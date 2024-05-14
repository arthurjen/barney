import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "ccg+",
};

export default async function Ccgplus() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-auto text-main text-3xl mt-24 px-8 text-center">
      <Image
        className="m-16"
        alt="ccg plus"
        src="/ccgplus.svg"
        width={100}
        height={100}
      />
      <div>to get access to barney, support us by subscribing to CCG+!</div>
      <div className="pt-8">find out more in our discord server!</div>
    </div>
  );
}
