"use client";
import Image from "next/image";

export default function TransactionsList({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return transactions.map((transaction, index) => (
    <div
      key={index}
      className="border-main bg-secondary border-2 flex justify-between items-center p-4"
    >
      <div className="border-main border-2 flex-none text-xl size-7 text-main text-center leading-none pt-[1px]">
        {sumCardQuantities(transaction)}
      </div>
      <div className="text-main grow text-xl pl-4 truncate">
        {truncateCardNames(transaction)}
      </div>
      <div className="flex-none">
        <Image src="placeholder.svg" alt="profile pic" width={36} height={36} />
      </div>
    </div>
  ));
}

function sumCardQuantities(transaction: Transaction) {
  return transaction.cards.reduce((acc, { quantity }) => acc + quantity, 0);
}

function truncateCardNames(transaction: Transaction) {
  return transaction.cards.reduce(
    (acc, { name }) =>
      acc ? `${acc}, ${name.toLowerCase()}` : name.toLowerCase(),
    ""
  );
}
