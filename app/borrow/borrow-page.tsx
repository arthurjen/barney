"use client";

import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Modal, Select, Input, Button, IconButton } from "@/components/ui";
import { useState } from "react";
import setData from "@/firebase/firestore/setData";
import Image from "next/image";
import TransactionsList from "./transactions-list";

const defaultCard: CardItem = {
  quantity: 1,
  name: "",
};

const numbers: SelectItem[] = [0, 1, 2, 3, 4].map((n) => ({
  value: n,
}));

export default function BorrowPage({
  people,
  transactions,
}: {
  people: People;
  transactions: Transaction[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    owner: "",
    cards: [{ ...defaultCard }],
  });

  function addCard() {
    const { owner, cards } = formData;
    const toSet = {
      owner,
      cards: [...cards, { ...defaultCard }],
    };
    setFormData(toSet);
  }

  function setOwner(owner: string) {
    const { cards } = formData;
    const toSet = {
      owner,
      cards,
    };
    setFormData(toSet);
  }

  function setCardQuantity(index: number, quantity: number) {
    const { owner, cards } = formData;
    const toSet = {
      owner,
      cards: [...cards],
    };
    if (quantity === 0) toSet.cards.splice(index, 1);
    else toSet.cards[index].quantity = quantity;
    setFormData(toSet);
  }

  function setCardName(index: number, name: string) {
    const { owner, cards } = formData;
    const toSet = {
      owner,
      cards: [...cards],
    };
    toSet.cards[index].name = name;
    setFormData(toSet);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    const data = {
      name: "John snow",
      house: "Stark",
    };
    const { result, error } = await setData("users", "user-id", data);

    if (error) {
      return console.log(error);
    } else console.log(result);
  }

  const peopleData: SelectItem[] = Object.keys(people).map((id) => ({
    value: id,
    display: people[id].name,
  }));

  const submitDisabled =
    !formData.cards.length ||
    formData.cards.some((card) => !card.name) ||
    !formData.owner;

  return (
    <div className="h-auto w-full">
      <div className="flex justify-center flex-col">
        <div>
          <div className="pb-2 border-b-4 border-main flex justify-between items-center w-full mb-4">
            <div className="text-main text-3xl">cards borrowed</div>
            <ChevronDownIcon className="fill-main" width={24} height={24} />
          </div>
          <TransactionsList transactions={transactions} />
        </div>
        <div>
          <div className="pb-2 border-b-4 border-main flex justify-between items-center w-full mt-8 mb-4">
            <div className="text-main text-3xl">cards lent</div>
            <ChevronDownIcon className="fill-main" width={24} height={24} />
          </div>
          <TransactionsList transactions={transactions} />
        </div>
      </div>
      <div className="w-full mt-8">
        <Button onClick={openModal} text="borrow"></Button>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="borrow cards">
        <form onSubmit={submitForm}>
          <div className="relative">
            <Select
              data={peopleData}
              label="owner"
              value={formData.owner}
              onSelect={setOwner}
              placeholder="member"
            />
          </div>
          <div className="pb-16 border-b-4 border-main mb-4">
            {formData.cards.map((card, index) => (
              <div
                key={index}
                className="flex justify-between w-full mx-0 mt-2"
              >
                <Select
                  type="number"
                  data={numbers}
                  className="relative min-w-16 mr-2"
                  value={{ value: card.quantity }}
                  onSelect={(e) => setCardQuantity(index, e.value)}
                  name={`card-quantity-${index}`}
                />
                <Input
                  value={card.name}
                  onChange={(e) => setCardName(index, e.target.value)}
                  name={`card-name-${index}`}
                />
              </div>
            ))}
            <div
              className="border-2 border-main w-full h-12 text-main text-3xl flex justify-center items-center mt-2"
              onClick={addCard}
            >
              <PlusIcon height={24} width={24} />
            </div>
          </div>
          <Button text="submit" type="submit" disabled={submitDisabled} />
        </form>
      </Modal>
    </div>
  );
}
