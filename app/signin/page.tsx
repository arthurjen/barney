import Image from "next/image";
import { SignIn } from "@/components/auth-components";

export default function SignInPage() {
  // https://discord.com/oauth2/authorize?scope=identify+email+guilds+guilds.members.read&response_type=code&client_id=1189651115348865167&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&code_challenge=IJwXnbBZh13H7N6v21VCCiyuprNc-7Bp58llmsXWbIk&code_challenge_method=S256
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen text-main">
        {/* <Image
          src="logo.svg"
          alt="Cherry City Games Logo"
          width={120}
          height={120}
        /> */}
        <div className="text-6xl">barney</div>
        <div className="my-6 text-3xl">a borrow & lending app</div>
        <SignIn />
      </div>
      {/* <div className="flex flex-col items-center w-full">
        <div className="w-full pb-4 mb-8 text-3xl text-center border-b-4 text-main border-main">
          log in or sign up
        </div>
        <SignIn />
      </div> */}
    </div>
  );
}
