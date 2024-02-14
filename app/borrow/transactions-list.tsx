"use client";
import Image from "next/image";

export default function TransactionsList({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return transactions.map((transaction, index) => (
    <div key={index} className="relative z-0">
      <div className="z-10 flex items-center justify-between h-20 p-4 border-2 border-main bg-secondary">
        <div className="border-main border-2 flex-none text-xl size-7 text-main text-center leading-none pt-[1px]">
          {sumCardQuantities(transaction)}
        </div>
        <div className="pl-4 text-xl truncate text-main grow">
          {truncateCardNames(transaction)}
        </div>
        <div className="flex-none">
          <Image
            src="placeholder.svg"
            alt="profile pic"
            width={36}
            height={36}
          />
        </div>
      </div>
      <div className="absolute w-full h-20 border-2 top-2 left-2 -z-10 bg-secondary border-main" />
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
