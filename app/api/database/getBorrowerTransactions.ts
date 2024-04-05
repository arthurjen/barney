import queryData from "@/firebase/firestore/queryData";

export async function getBorrowerTransactions(userId: string): Promise<Transactions> {
  const { result } = await queryData(
    "transactions",
    ["borrower", "==", userId],
    ["returned", "==", 0]
  );

  // const transactions: Transaction[] = Object.values(result || {});
  return result as Transactions;
}
