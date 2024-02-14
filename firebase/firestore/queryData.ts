import FirebaseApp from "../config";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { auth } from "auth";

const db = getFirestore(FirebaseApp);
export default async function queryData(
  _collection: string,
  key: string,
  value: string
): Promise<Res> {
  const session = await auth();
  if (!session?.user) throw "must be logged in";

  let result: { [id: string]: any } = {};
  let error = null;
  try {
    const collectionRef = collection(db, _collection);
    const q = query(collectionRef, where(key, "==", value));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      result[doc.id] = doc.data();
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
