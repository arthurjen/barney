// "use client";
import Image from "next/image";
import { Button } from "@/components/ui";
import { SignIn } from "@/components/auth-components";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-secondary p-8 font-nuform">
      <div className="flex flex-col items-center w-full text-main mt-36">
        <Image
          src="logo.svg"
          alt="Cherry City Games Logo"
          width={120}
          height={120}
        />
        <div className="text-5xl mt-8">barney</div>
        <div className="text-3xl mt-4">a borrow & lending app</div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="text-main text-center text-3xl w-full pb-4 border-main border-b-4 mb-8">
          log in or sign up
        </div>
        <SignIn />
      </div>
    </main>
  );
}
