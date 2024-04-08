import queryData from "@/firebase/firestore/queryData";

export async function getTransactions(userId: string, role: "owner" | "borrower"): Promise<Transactions> {
  const { result } = await queryData(
    "transactions",
    [role, "==", userId],
    ["returned", "==", 0]
  );

  return result as Transactions;
}
