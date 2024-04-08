import FirebaseApp from "../config";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(FirebaseApp);
// export default async function setData(_collection: string, data: any) {
//   let id = null;
//   let error = null;

//   try {
//     const docRef = await addDoc(collection(db, _collection), data);
//     id = docRef.id;
//   } catch (e) {
//     error = e;
//   }
//   return id;
// }

export default async function setData(_collection: string, data: any) {
  let id = null;
  let error = null;

  try {
    // const docRef = await addDoc(collection(db, _collection), data);
    const docRef = doc(collection(db, _collection));
    id = docRef.id;
    const toSet = { id, ...data };
    await setDoc(docRef, toSet);
    return toSet;
  } catch (e) {
    error = e;
  }
  return id;
}
