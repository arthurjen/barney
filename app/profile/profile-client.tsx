"use client";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function ProfileClient({ ...props }) {
  const { session } = props;
  console.log(session.user);
  return (
    <div className="w-full h-auto flex flex-col justify-between items-center text-main">
      <Image
        alt="profile pic"
        className="rounded-full border-4 border-main"
        src={session.user.image}
        width={100}
        height={100}
      />
      <div>{session.user.name}</div>
      <div>est. jan 2024</div>
      <div>44</div>
      <div>credits</div>
      <div className="px-8 w-full absolute bottom-32">
        <Button className="self-end" onClick={() => console.log('edit profile')}>edit profile</Button>
      </div>
    </div>
  );
}
