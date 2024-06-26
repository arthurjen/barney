"use client";

import Image from "next/image";
import { Modal, Select, Input, Button, IconButton } from "@/components/ui";
import { useState } from "react";
import { TRANSACTIONS } from "@/app/api/database";
import { parseDecklist } from "../utils/parseDecklist";
const defaultCard: CardItem = {
  quantity: 1,
  name: "",
};
const defaultFormData = {
  owner: { display: "", value: "" },
  cards: [{ ...defaultCard }],
};

const numbers: SelectItem<number>[] = [0, 1, 2, 3, 4].map((n) => ({
  value: n,
}));

export default function BorrowModal({
  isOpen,
  closeModal,
  people,
  user,
  borrowerTransactions,
}: {
  isOpen: boolean;
  closeModal: () => void;
  people: People;
  user: User;
  borrowerTransactions: Transaction[];
}) {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    owner: SelectItem<string>;
    cards: CardItem[];
  }>(defaultFormData);

  function addCard() {
    const { owner, cards } = formData;
    const toSet = {
      owner,
      cards: [...cards, { ...defaultCard }],
    };
    setFormData(toSet);
  }

  function setOwner(owner: SelectItem<string>) {
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

  function resetForm() {
    setFormData(defaultFormData);
  }

  async function pasteFromClipboard() {
    const text = await navigator.clipboard.readText();
    const list: CardItem[] = parseDecklist(text).map((card) => ({
      quantity: card[0] as number,
      name: card[1] as string,
    }));
    if (!list.length) return;

    const { owner, cards } = formData;
    const toSet = {
      owner,
      cards: [...cards.filter((card) => !!card.name), ...list],
    };
    setFormData(toSet);
  }

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!user.id || !formData.owner.value || !formData.cards.length) return;
    setSubmitting(true);
    const transaction: FormTransaction = {
      owner: formData.owner.value,
      cards: formData.cards,
      borrower: user.id,
    };
    const _transaction = await TRANSACTIONS.set(transaction);

    setSubmitting(false);
    if (_transaction) {
      borrowerTransactions.unshift(_transaction);
      resetForm();
      closeModal();
    }
  }

  const peopleData: SelectItem<string>[] = Object.keys(people)
    .map((id) => ({
      value: id,
      display: people[id].name,
    }))
    .filter((item) => item.value !== user.id);

  const submitDisabled =
    !formData.cards.length ||
    formData.cards.some((card) => !card.name) ||
    !formData.owner.value;

  return (
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
        <div className="pb-16 mb-6 border-b-4 border-main">
          {formData.cards.map((card, index) => (
            <div key={index} className="flex justify-between w-full mx-0 mt-2">
              <Select
                type="number"
                data={numbers}
                className="relative mr-2 min-w-16"
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
          <div className="flex items-center justify-center">
            <div
              className="flex items-center justify-center w-full h-12 mt-2 text-3xl border-2 border-main text-main mr-2"
              onClick={addCard}
            >
              <Image
                alt="plus icon"
                src="icons/plus.svg"
                width={18}
                height={18}
              />
            </div>
            <div
              className="flex items-center justify-center min-w-16 h-12 mt-2 text-3xl border-2 border-main text-main"
              onClick={pasteFromClipboard}
            >
              <Image
                alt="clipboard icon"
                src="icons/clipboard.svg"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <Button
          type="submit"
          text="submit"
          outline={submitDisabled}
          disabled={submitDisabled}
          loading={submitting}
        />
      </form>
    </Modal>
  );
}
