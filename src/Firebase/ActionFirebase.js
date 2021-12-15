import {
  addDoc,
  collection,
  doc,
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

export const GetNotesAllNotes = ({}) => {};

export const GetNotesByCategory = async ({ uid, category,setNotes }) => {
  const GetNotes = collection(db, `${uid}`);
  const queryCategory = query(GetNotes, where('category', '==', category));
  const querySnapshot = await getDocs(queryCategory);
  querySnapshot.forEach((not) => {
    const data = not.data()
    const id = not.id
    const note = {id , ...data}
    setNotes(noteP => [...noteP, note])
  });
  return NotesR(querySnapshot);
};

export const GetNotesByDate = () => {};

export const GetNotesByImportant = () => {};
