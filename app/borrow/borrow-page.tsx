"use client";

import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Modal, Select, Input, Button, IconButton } from "@/components/ui";
import { useState } from "react";
import { setTransaction } from "@/app/api/database";
import TransactionsList from "./transactions-list";
import type { User } from "next-auth";
import { Disclosure, Transition } from "@headlessui/react";

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

export default function BorrowPage({
  people,
  ownerTransactions,
  borrowerTransactions,
  user,
}: {
  people: People;
  ownerTransactions: Transaction[];
  borrowerTransactions: Transaction[];
  user: User;
}) {
  const [isOpen, setIsOpen] = useState(false);
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

  function closeModal() {
    resetForm();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function resetForm() {
    setFormData(defaultFormData);
  }

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    setSubmitting(true);
    const transaction: Transaction = {
      owner: formData.owner.value,
      cards: formData.cards,
      borrower: user.id,
    };
    const id = await setTransaction(transaction);

    setSubmitting(false);
    if (id) {
      borrowerTransactions.unshift(transaction);
      closeModal();
    }
  }

  const peopleData: SelectItem<string>[] = Object.keys(people)
    .map((id) => ({
      value: id,
      display: people[id].name,
    }))
    .filter((item) => item.value !== user.id);

  const joinedBorrowerTransactions = joinTransactionData(
    borrowerTransactions,
    people
  );
  const joinedOwnerTransactions = joinTransactionData(
    ownerTransactions,
    people
  );

  const submitDisabled =
    !formData.cards.length ||
    formData.cards.some((card) => !card.name) ||
    !formData.owner.value;

  return (
    <div className="w-full h-auto">
      <div className="flex flex-col justify-center">
        <TransactionsCollapse
          title="cards borrowed"
          transactions={sortByTimestamp(joinedBorrowerTransactions)}
          user={user}
        />
        <div className="pt-6" />
        <TransactionsCollapse
          className="pt-6"
          title="cards lent"
          transactions={sortByTimestamp(joinedOwnerTransactions)}
          user={user}
        />
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
          <div className="pb-16 mb-4 border-b-4 border-main">
            {formData.cards.map((card, index) => (
              <div
                key={index}
                className="flex justify-between w-full mx-0 mt-2"
              >
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
            <div
              className="flex items-center justify-center w-full h-12 mt-2 text-3xl border-2 border-main text-main"
              onClick={addCard}
            >
              <PlusIcon height={24} width={24} />
            </div>
          </div>
          <Button
            text="submit"
            disabled={submitDisabled}
            loading={submitting}
          />
        </form>
      </Modal>
    </div>
  );
}

function sortByTimestamp(transactions: JoinedTransaction[]) {
  return transactions.sort((a, b) => b.timestamp - a.timestamp);
}

function joinTransactionData(
  transactions: Transaction[],
  people: People
): JoinedTransaction[] {
  // { ...Transaction, borrower: Person, owner: Person }
  return transactions.map((transaction) => {
    return {
      ...transaction,
      owner: people[transaction.owner],
      borrower: people[transaction.borrower],
    };
  });
}

function TransactionsCollapse({
  className,
  transactions,
  title,
  user,
}: {
  className?: string;
  transactions: JoinedTransaction[];
  title: string;
  user: User;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <div className="flex items-center justify-between w-full pb-2 mb-4 border-b-4 border-main">
              <div className="text-3xl text-main">{title}</div>
              <ChevronDownIcon
                className={`fill-main ${open ? "rotate-180 transform" : ""}`}
                width={24}
                height={24}
              />
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            className="transition-all duration-300 overflow-hidden"
            enterFrom="transform scale-95 opacity-0 max-h-0"
            enterTo="transform scale-100 opacity-100 max-h-[1000px]"
            leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
            leaveTo="transform scale-95 opacity-0 max-h-0"
          >
            <Disclosure.Panel>
              <TransactionsList transactions={transactions} user={user} />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
