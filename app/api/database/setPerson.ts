// user logs in via discord auth
// use the discord id as id in database
import setData from "@/firebase/firestore/setData";

export async function setPerson(data: Person) {
  const toSet: Person = {
    name: data.name,
    email: data.email,
    image: data.image,
    karma: 0,
    date: Date.now(),
  };
  const result = await setData("users", toSet);

  return result;
}
