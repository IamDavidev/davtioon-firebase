import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import toast from 'react-hot-toast';
import { db } from './config';



export const addNote = async ({ evt, uid, nav }) => {
  const pruebaref = collection(db, `${uid}`);
  const title = evt.target.title.value;
  if(title.length > 10){
    return toast.error('Title must be less than 10 characters');
  }
  await addDoc(pruebaref, {
    title,
    content: evt.target.content.value,
    important: evt.target.important.checked,
    date: new Date(),
    category: evt.target.category.value,
  });
  nav('/notes');
};
export const ƒGetAllNotes = async ({ authUser, setNotes }) => {
  const notesAlls = query(collection(db, `${authUser.uid}`));
  const snapShot = await getDocs(notesAlls);
  if (authUser.isLoggedIn === false) {
    return setNotes([]);
  }
  snapShot.forEach((not) => {
    const data = not.data();
    const id = not.id;
    const note = { id, ...data };
    setNotes((prev) => [...prev, note]);
  });
};
export const ƒgetNote = async ({ id, setNote, authUser }) => {
  const docRef = doc(db, authUser.uid, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setNote([{ id: docSnap.id, ...docSnap.data() }]);
  }
};
export async function ƒHandleNotesCategroy({authUser,setNotes,category}) {
  const GetNotes = collection(db, authUser.uid);
  const GetNotesQuery = query(GetNotes, where('category', '==', category));
  const GetNotesSnap = await getDocs(GetNotesQuery);

  GetNotesSnap.forEach((note) => {
    const data = note.data();
    const id = note.id;
    const notes = { id, ...data };
    setNotes((note) => [...note, notes]);
  });
}
export const ƒGetImportantsNotes = async ({ authUser, setNotes }) => {
  const getNotes = collection(db, `${authUser.uid}`);
  const getSnap = query(getNotes, where('important', '==', true));
  const getNotesI = await getDocs(getSnap);

  getNotesI.forEach((note) => {
    const data = note.data();
    const id = note.id;
    const notes = { id, ...data };
    setNotes((prev) => [...prev, notes]);
  });
};
export const ƒDeleteNote = async ({user,id, navigate}) => {
  await deleteDoc(doc(db, user.uid, id));
  navigate('/home');
}
