import FirebaseApp from "../config";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { auth } from "auth";

const db = getFirestore(FirebaseApp);
export default async function getDocument(
  _collection: string,
  id?: string
): Promise<Res> {
  const session = await auth();
  if (!session?.user) throw "must be logged in";

  let result: { [id: string]: any } = {};
  let error = null;
  if (id) {
    let docRef = doc(db, _collection, id);

    try {
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) result = docSnapshot.data();
    } catch (e) {
      error = e;
    }
  } else {
    const querySnapshot = await getDocs(collection(db, _collection));
    result = {};
    querySnapshot.forEach((doc) => {
      result[doc.id] = doc.data();
    });
  }

  return { result, error };
}
