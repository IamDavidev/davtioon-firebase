import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../Firebase/config';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const handlefunction = async () => {
    const notesAlls = query(collection(db, 'notesPrueba'));
    const snapShot = await getDocs(notesAlls);
    snapShot.forEach((not) => {
      const data = not.data();
      setNotes((prev) => [...prev, data]);
    });
  };
  useEffect(async () => {
    handlefunction();
  }, []);
  console.log(notes);
  return (
    <div>
      {' '}
      <h1>Notes</h1>
      {notes.map((note) => {
        return (
          <div key={note.date}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
