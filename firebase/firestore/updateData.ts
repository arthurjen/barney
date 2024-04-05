import {
  updateDoc,
  serverTimestamp,
  doc,
  getFirestore,
  collection,
} from "firebase/firestore";
import FirebaseApp from "../config";

const db = getFirestore(FirebaseApp);

const docRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
export default async function updateData(_collection: string, id:string, data: any) {
  let error = null;

  try {
    // const docRef = await addDoc(collection(db, _collection), data);
    const docRef = doc(db, _collection, id);
    await updateDoc(docRef, data);
  } catch (e) {
    error = e;
  }
  return id;
}
