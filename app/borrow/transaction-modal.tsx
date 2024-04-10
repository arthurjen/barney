"use client";
import Image from "next/image";
import { Modal, Button } from "@/components/ui";
import { TRANSACTIONS } from "@/app/api/database";
import { useState } from "react";
export default function TransactionModal({
  isOpen,
  closeModal,
  transaction,
  user,
  returnTransaction,
}: {
  isOpen: boolean;
  closeModal: () => void;
  transaction: JoinedTransaction | null;
  user: User;
  returnTransaction: (id: string) => void;
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  
  if (!transaction) return;

  async function returnCards(id: string) {
    setIsUpdating(true);
    await TRANSACTIONS.update(id, { returned: Date.now() });
    returnTransaction(id);
    setIsUpdating(false);
    closeModal();
  }

  const userIsOwner = user.id === transaction.owner.id;
  const title = userIsOwner ? "cards lent" : "cards borrowed";

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title={title}>
      <div className="min-w-full text-main text-xl">
        <div>
          <div>{userIsOwner ? "borrower:" : "owner:"}</div>
          <div className="flex items-center py-2">
            <Image
              className="border-2 border-main w-[36px] h-[36px] box-border rounded-full mr-3"
              src={
                userIsOwner
                  ? transaction.borrower.image
                  : transaction.owner.image
              }
              alt="owner profile pic"
              width={36}
              height={36}
            />
            <div>
              {userIsOwner
                ? transaction.borrower.name.toLowerCase()
                : transaction.owner.name.toLowerCase()}
            </div>
          </div>
        </div>

        <div>
          <div>cards:</div>
          <div className="py-2">
            {transaction.cards.map((card, index) => (
              <div key={index} className="py-2 flex items-center">
                <div className="border-main border-2 flex-none text-xl size-7 text-main text-center leading-none pt-[1px] mr-3">
                  {card.quantity}
                </div>
                <div>{card.name.toLowerCase()}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pb-6">
          <div>when:</div>
          <div className="">{parseTimestamp(transaction.timestamp)}</div>
        </div>
      </div>
      {userIsOwner && !transaction.returned && (
        <div className="w-full pt-4 border-t-4 text-main border-main">
          <Button onClick={() => returnCards(transaction.id)} text="returned" disabled={isUpdating} loading={isUpdating} />
        </div>
      )}
    </Modal>
  );
}

function parseTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const month = `0${date.getMonth()}`.slice(-2);
  const day = `0${date.getDay()}`.slice(-2);
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
