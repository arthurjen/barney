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
    <div className="flex flex-col items-center justify-between w-full h-auto text-main">
      <Image
        alt="profile pic"
        className="border-4 rounded-full border-main"
        src="placeholder.svg"
        width={100}
        height={100}
      />
      <div className="mt-4 text-3xl">test test</div>
      <div className="mt-2 text-xl">est. {dateCreated}</div>
      <div className="flex content-center justify-center w-24 h-24 p-4 mt-8 text-5xl border-4 rounded-full border-main">
        {karma}
      </div>
      <div className="mt-2 text-3xl">karma</div>
      <div className="flex content-center justify-between w-full pb-2 mt-8 text-3xl border-b-4 border-main">
        <div>borrowed</div>
        <div>{borrowed}</div>
      </div>
      <div className="flex content-center justify-between w-full pb-2 mt-8 text-3xl border-b-4 border-main">
        <div>lent</div>
        <div>{lent}</div>
      </div>

      <div className="w-full py-8">
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
