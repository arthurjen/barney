"use client";
import Image from "next/image";
import { useState } from "react";
import TransactionModal from "./transaction-modal";

export default function TransactionsList({
  transactions,
  user,
}: {
  transactions: JoinedTransaction[];
  user: User;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentTransaction, setCurrentTransaction] = useState<JoinedTransaction | null>(null)
  function closeModal() {
    setIsOpen(false);
  }

  function openModal(transaction: JoinedTransaction) {
    setCurrentTransaction(transaction);
    setIsOpen(true);
  }
  return (
    <>
      {transactions.map((transaction, index) => (
        <div key={index} onClick={() => openModal(transaction)} className="relative z-0 mt-5">
          <div className="z-10 flex items-center justify-between h-20 p-4 border-2 border-main bg-secondary">
            <div className="border-main border-2 flex-none text-xl size-7 text-main text-center leading-none pt-[1px]">
              {sumCardQuantities(transaction)}
            </div>
            <div className="pl-4 text-xl truncate text-main grow">
              {truncateCardNames(transaction)}
            </div>
            <div className="flex-none">
              <Image
                className="border-2 border-main w-[36px] h-[36px] box-border rounded-full"
                src={transaction.owner.image}
                alt="owner profile pic"
                width={36}
                height={36}
              />
            </div>
          </div>
          {transaction.cards.length > 1 && (
            <div className="absolute w-full h-20 border-2 top-2 left-2 -z-10 bg-secondary border-main" />
          )}
        </div>
      ))}
      <TransactionModal
        isOpen={isOpen}
        closeModal={closeModal}
        transaction={currentTransaction}
        user={user}
      />
    </>
  );
}

function sumCardQuantities(transaction: JoinedTransaction) {
  return transaction.cards.reduce((acc, { quantity }) => acc + quantity, 0);
}

function truncateCardNames(transaction: JoinedTransaction) {
  return transaction.cards.reduce(
    (acc, { name }) =>
      acc ? `${acc}, ${name.toLowerCase()}` : name.toLowerCase(),
    ""
  );
}
