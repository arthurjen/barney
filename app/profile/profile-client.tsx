"use client";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Popover, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { calculateKarma } from "@/app/utils";
import EditProfileModal from "./edit-profile-modal";
import { useState } from "react";

export default function ProfileClient({ person }: { person: Person }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(person.name);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const karmaTooltipText =
    "you get 2 points of karma for each card lent out, and 1 point per card borrowed (and returned)";

  return (
    <div className="flex flex-col items-center justify-between w-full h-auto text-main">
      <Image
        alt="profile pic"
        className="border-4 rounded-full border-main"
        src={person.image}
        width={100}
        height={100}
      />
      <div className="mt-4 text-3xl">{name}</div>
      <div className="mt-2 text-xl">est. {getDateEst(person.date)}</div>
      <div className="flex content-center h-24 justify-center w-24 p-4 mt-8 text-5xl border-4 rounded-full border-main">
        {calculateKarma(person)}
      </div>
      <div className="pt-2 flex items-center justify-center">
        <div className="text-3xl pl-8 pr-2">karma</div>
        <Popover className="mt-2">
          <Popover.Button>
            <InformationCircleIcon height={24} width={24} />
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 w-36 border-2 border-main bg-secondary p-2 rounded">
              <div className="">{karmaTooltipText}</div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div className="flex content-center justify-between w-full pb-2 mt-8 text-3xl border-b-4 border-main">
        <div>borrowed</div>
        <div>{person.borrowedCount}</div>
      </div>
      <div className="flex content-center justify-between w-full pb-2 mt-8 text-3xl border-b-4 border-main">
        <div>lent</div>
        <div>{person.lentCount}</div>
      </div>

      <div className="w-full py-8">
        <Button
          onClick={openModal}
          text="edit profile"
        />
      </div>
      <EditProfileModal 
        isOpen={isOpen}
        closeModal={closeModal}
        user={person}
        setName={setName}
      />
    </div>
  );
}

function getDateEst(dateCreated: number) {
  const dateString = new Date(dateCreated).toString().split(" ");
  return `${dateString[1]} ${dateString[3]}`.toLowerCase();
}
