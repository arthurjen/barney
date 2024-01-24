"use client";

import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { Modal, Select, Input, Button } from "@/components/ui";

import { useState } from "react";
const defaultCard: CardItem = {
  quantity: 1,
  name: "",
};
export default function BorrowPage() {
  let [isOpen, setIsOpen] = useState(false);
  let [cards, setCards] = useState([defaultCard]);
  let [owner, setOwner] = useState("");
  function addCard() {
    setCards([...cards, defaultCard]);
  }

  function removeCard(index: number) {
    const toSet = [...cards];
    toSet.splice(index, 1);
    setCards(toSet);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const people = [
    { id: "123451", name: "Arthur Jen" },
    { id: "123452", name: "Devon Straub" },
    { id: "123453", name: "Jackson Knorr" },
    { id: "123454", name: "Scott Montgomery" },
    { id: "123455", name: "Sean Collins" },
    { id: "123456", name: "Tom Huteson" },
  ];

  const peopleData: SelectItem[] = people.map(({ id, name }) => ({
    value: id,
    display: name,
  }));

  const numbers: SelectItem[] = [1, 2, 3, 4].map((n) => ({
    value: n,
  }));

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center flex-col px-8">
        <div className="pb-2 border-b-4 border-main flex justify-between items-center w-full mb-8">
          <div className="text-main text-3xl">cards borrowed</div>
          <ChevronDownIcon className="fill-main" width={24} height={24} />
        </div>
        <div className="pb-2 border-b-4 border-main flex justify-between items-center w-full mb-8">
          <div className="text-main text-3xl">cards lent</div>
          <ChevronDownIcon className="fill-main" width={24} height={24} />
        </div>
      </div>
      <div className="px-8 w-full absolute bottom-32">
        <Button onClick={openModal} text="borrow"></Button>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="Borrow Cards">
        <form>
          <Select data={peopleData} label="Owner" value={owner} />
          {cards.map((card, index) => (
            <div key={index} className="flex space-between my-2 w-full mx-0">
              <Select
                data={numbers}
                className="w-16 mr-2"
                value={card.quantity}
              />
              <Input value={card.name} />
              {/* <Button onClick={() => console.log("X")}>
                <XMarkIcon />
              </Button> */}
            </div>
          ))}
          <div>Add Card</div>
        </form>
      </Modal>
    </div>
  );
}
