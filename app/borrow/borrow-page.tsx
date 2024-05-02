"use client";

import { Button } from "@/components/ui";
import { useState } from "react";
import TransactionsCollapse from "./transaction-collapse";
import BorrowModal from "./borrow-modal";


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

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const joinedBorrowerTransactions = joinTransactionData(
    borrowerTransactions,
    people
  );
  const joinedOwnerTransactions = joinTransactionData(
    ownerTransactions,
    people
  );

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
          title="cards lent"
          transactions={sortByTimestamp(joinedOwnerTransactions)}
          user={user}
        />
      </div>
      <div className="w-full my-8 px-[1rem]">
        <Button onClick={openModal} text="borrow"></Button>
      </div>

      <BorrowModal
        isOpen={isOpen}
        closeModal={closeModal}
        people={people}
        user={user}
        borrowerTransactions={borrowerTransactions}
      />
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