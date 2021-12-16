import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { db } from '../../Firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ContextUser } from '../../Utils/context';
import NotesR from '../NotesR/NotesR';
import { StyledCategory  } from './StyledCategoryNotes';
import ButtonGoBack from '../buttonGoBack';

const CategoryNotes = () => {
  const { category } = useParams();
  const [notes, setNotes] = useState([]);
  const { authUser } = useContext(ContextUser);

  async function ƒHandleNotesCategroy() {
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
  useEffect(() => {
    authUser.isLoggedIn && ƒHandleNotesCategroy();
  }, []);

  return (
    <>
      <StyledCategory>category</StyledCategory>

      <NotesR notes={notes} Tnotes={category} />
      
      <ButtonGoBack />
    </>
  );
};

export default CategoryNotes;
