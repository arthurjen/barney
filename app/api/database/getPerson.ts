import getData from "@/firebase/firestore/getData";

export async function getPerson(id: string) {
  const { result } = await getData("users", id);
  console.log("RESULT:", result);
  const people: People = result || {}

  return people;
}
