"use client";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function ProfileClient({ ...props }) {
  const { session } = props;

  const dateCreated = getDateEst(1706120282152);
  const borrowed = 8;
  const lent = 16;
  const karma = 44;

  return (
    <div className="w-full h-auto flex flex-col justify-between items-center text-main">
      <Image
        alt="profile pic"
        className="rounded-full border-4 border-main"
        src="placeholder.svg"
        width={100}
        height={100}
      />
      <div className="text-3xl mt-4">test test</div>
      <div className="text-xl mt-2">est. {dateCreated}</div>
      <div className="text-5xl mt-8 rounded-full border-main border-4 w-24 h-24 flex justify-center content-center p-4">
        {karma}
      </div>
      <div className="text-3xl mt-2">karma</div>
      <div className="text-3xl mt-8 pb-2 w-full flex justify-between border-b-4 content-center border-main">
        <div>borrowed</div>
        <div>{borrowed}</div>
      </div>
      <div className="text-3xl mt-8 pb-2 w-full flex justify-between border-b-4 content-center border-main">
        <div>lent</div>
        <div>{lent}</div>
      </div>

      <div className="py-8 w-full">
        <Button
          onClick={() => console.log("edit profile")}
          text="edit profile"
        />
      </div>
    </div>
  );
}

function getDateEst(dateCreated: number) {
  const dateString = new Date(dateCreated).toString().split(" ");
  return `${dateString[1]} ${dateString[3]}`.toLowerCase();
}
