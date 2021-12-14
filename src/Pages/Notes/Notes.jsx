import { collection, getDocs, query } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { db } from '../../Firebase/config';
import { ContextUser } from '../../Utils/context';

const Notes = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  const [notes, setNotes] = useState([]);
  const handlefunction = async () => {
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
  useEffect(async () => {
    handlefunction();
  }, []);
  const logout = () => {
    setAuthUser((authUser.isLoggedIn = false));
    setNotes([]);
  };
  console.log(notes);
  return (
    <div>
      {' '}
      <h1>Notes</h1>
      {notes.map((note) => {
        return (
          <div key={note.date}>
            <h3>{note.title}</h3>
            <p>{note.name}</p>
            <p>{note.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
