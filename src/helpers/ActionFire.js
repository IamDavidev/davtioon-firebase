import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/config';

export const addNote = async ({ evt, uid }) => {
  const pruebaref = collection(db, `${uid}`);
  const title = evt.target.title.value;
  await addDoc(pruebaref, {
    title: title,
    content: evt.target.content.value,
    important: evt.target.important.checked,
    date: new Date(),
    category: evt.target.category.value,
  });
};
