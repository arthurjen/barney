import FirebaseApp from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "auth";

const db = getFirestore(FirebaseApp);
export default async function setData(
  colllection: string,
  id: string,
  data: any
) {
  const session = await auth();
  if (!session?.user) throw "must be logged in";

  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
