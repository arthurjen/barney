import queryData from "@/firebase/firestore/queryData";
import setData from "@/firebase/firestore/setData";
import updateData from "@/firebase/firestore/updateData";

export const TRANSACTIONS = {
  get: async (
    userId: string,
    role: "owner" | "borrower"
  ): Promise<Transactions> => {
    const { result } = await queryData(
      "transactions",
      [role, "==", userId],
      ["returned", "==", 0]
    );

    return result as Transactions;
  },
  set: async (data: FormTransaction): Promise<Transaction> => {
    const toSet: FormTransaction = {
      ...data,
      returned: 0,
      timestamp: Date.now(),
    };
    const result = await setData("transactions", toSet);

    return result as Transaction;
  },
  update: async (transactionId: string, data: any) => {
    const result = await updateData("transactions", transactionId, data);
    console.log("update result", result);
    return result;
  },
};
