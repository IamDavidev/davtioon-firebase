import { collection, getDocs, query } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import NotesR from '../../components/NotesR/NotesR';
import NoUser from '../../components/NoUser';
import { db } from '../../Firebase/config';
import { ContextUser } from '../../Utils/context';

const Notes = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  const [notes, setNotes] = useState([]);
  const { isLoggedIn } = authUser;
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
    isLoggedIn && handlefunction();
  }, []);
  return (
    <>
    {
      authUser.isLoggedIn === true
        ? <NotesR notes={notes} />
        : <NoUser />
    }
        </>
  );
};

export default Notes;
