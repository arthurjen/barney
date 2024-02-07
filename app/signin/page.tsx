import Image from "next/image";
import { SignIn } from "@/components/auth-components";

export default function SignInPage() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center text-main">
        {/* <Image
          src="logo.svg"
          alt="Cherry City Games Logo"
          width={120}
          height={120}
        /> */}
        <div className="text-6xl">barney</div>
        <div className="text-3xl my-6">a borrow & lending app</div>
        <SignIn />
      </div>
      {/* <div className="flex flex-col items-center w-full">
        <div className="text-main text-center text-3xl w-full pb-4 border-main border-b-4 mb-8">
          log in or sign up
        </div>
        <SignIn />
      </div> */}
    </div>
  );
}
