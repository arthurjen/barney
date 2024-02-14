import queryData from "@/firebase/firestore/queryData";

export async function getTransactions(userId: string): Promise<Transaction[]> {
  const { result } = await queryData("transactions", "borrower", userId);

  const transactions: Transaction[] = Object.values(result || {});
  return transactions;
}

