import FirebaseApp from "../config";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const db = getFirestore(FirebaseApp);
export default async function setData(_collection: string, data: any) {
  let id = null;
  let error = null;

  try {
    const docRef = await addDoc(collection(db, _collection), data);
    id = docRef.id;
  } catch (e) {
    error = e;
  }
  return id;
}
