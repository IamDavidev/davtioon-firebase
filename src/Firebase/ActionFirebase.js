import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import NotesR from '../components/NotesR/NotesR';
import { db } from './config';

export const addNote = async ({ evt, uid, nav }) => {
  const pruebaref = collection(db, `${uid}`);
  await addDoc(pruebaref, {
    title: evt.target.title.value,
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
    setNote( [{ id: docSnap.id, ...docSnap.data() }]);
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};
