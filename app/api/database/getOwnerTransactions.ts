import queryData from "@/firebase/firestore/queryData";

export async function getOwnerTransactions(userId: string): Promise<Transactions> {
  const { result } = await queryData(
    "transactions",
    ["owner", "==", userId],
    ["returned", "==", 0]
  );

  return result as Transactions;
}
