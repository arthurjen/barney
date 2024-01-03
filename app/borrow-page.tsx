"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { Modal, Select, Input, Button } from "./components";

import { useState } from "react";
const defaultCard: CardItem = {
  quantity: 1,
  name: "",
};
export default function BorrowPage() {
  let [isOpen, setIsOpen] = useState(false);
  let [cards, setCards] = useState([defaultCard]);
  let [owner, setOwner] = useState('');
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
    <div>
      {/* Display of borrowed cards */}
      {/* Borrow button */}
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Borrow
        </button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Borrow Cards">
        <form>
          <Select data={peopleData} label="Owner" value={owner} />
          {cards.map((card, index) => (
            <div key={index} className="flex space-between my-2 w-full mx-0">
              <Select data={numbers} className="w-20 mr-2" value={card.quantity} />
              <Input value={card.name} />
              <Button icon={<XMarkIcon />} />
            </div>
          ))}
          <div>
            Add Card
          </div>
        </form>
      </Modal>
    </div>
  );
}
