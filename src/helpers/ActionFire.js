import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/config';

export const addNote = async ({ evt }) => {
  const pruebaref = collection(db, 'notesPrueba');
  const title = evt.target.title.value;
  await setDoc(doc(pruebaref, title), {
    title: title,
    content: evt.target.content.value,
    important: evt.target.important.checked,
    date: new Date(),
    category: evt.target.category.value,
    img: evt.target.img.value,
  });
};

