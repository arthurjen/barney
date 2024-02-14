import getData from "@/firebase/firestore/getData";

export async function getPeople() {
  const { result } = await getData("users");

  const people: People = result || {}
  return people;
}
