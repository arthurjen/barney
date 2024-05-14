import setData from "@/firebase/firestore/setData";
import updateData from "@/firebase/firestore/updateData";
import getData from "@/firebase/firestore/getData";

export const PEOPLE = {
  get: async () => {
    const { result } = await getData("users");

    const people: People = result || {};
    return people;
  },
  getPerson: async (id: string) => {
    const { result } = await getData("users", id);
    const person: People = result || {};

    return person;
  },
  set: async (data: any) => {
    const toSet: Person = {
      name: data.name,
      email: data.email,
      image: data.image,
      borrowedCount: 0,
      lentCount: 0,
      date: Date.now(),
    };
    const result = await setData("users", toSet);

    return result;
  },
  update: async (personId: string, data: any) => {
    const result = await updateData("users", personId, data);

    return result;
  },
};

function sumCardQuantities(transaction: JoinedTransaction) {
  return transaction.cards.reduce((acc, { quantity }) => acc + quantity, 0);
}
