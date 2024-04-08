import setData from "@/firebase/firestore/setData";

export async function setTransaction(data: FormTransaction) {
  const toSet: FormTransaction = {
    ...data,
    returned: 0,
    timestamp: Date.now(),
  };
  const result = await setData("transactions", toSet);

  return result as Transaction;
}
