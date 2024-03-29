import queryData from "@/firebase/firestore/queryData";

export async function getOwnerTransactions(userId: string): Promise<Transaction[]> {
  const { result } = await queryData(
    "transactions",
    ["owner", "==", userId],
    ["returned", "==", 0]
  );

  const transactions: Transaction[] = Object.values(result || {});
  return transactions;
}
