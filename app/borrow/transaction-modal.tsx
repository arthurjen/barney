"use client";
import Image from "next/image";
import { Modal } from "@/components/ui";
export default function TransactionModal({
  isOpen,
  closeModal,
  transaction,
  user,
}: {
  isOpen: boolean;
  closeModal: () => void;
  transaction: JoinedTransaction | null;
  user: User;
}) {
  if (!transaction) return;
  // console.log('transaction', transaction);
  // console.log('user', user);
  const title = user.id === transaction.borrower.id ? "cards borrowed" : "cards lent"
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title={title}>
      <div>owner:</div>
      <div>cards:</div>
      <div>when:</div>
    </Modal>
  );
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
