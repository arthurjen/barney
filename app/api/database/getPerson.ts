import getData from "@/firebase/firestore/getData";

export async function getPerson(id: string) {
  const { result } = await getData("users", id);
  const people: People = result || {}

  return people;
}
