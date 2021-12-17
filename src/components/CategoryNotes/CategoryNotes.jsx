import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { db } from '../../Firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ContextUser } from '../../Utils/context';
import NotesR from '../NotesR/NotesR';
import { StyledCategory } from './StyledCategoryNotes';
import ButtonGoBack from '../buttonGoBack';
import { ƒHandleNotesCategroy } from '../../Firebase/ActionFirebase';

const CategoryNotes = () => {
  const { category } = useParams();
  const [notes, setNotes] = useState([]);
  const { authUser } = useContext(ContextUser);
  useEffect(() => {
    authUser.isLoggedIn &&
      ƒHandleNotesCategroy({ category, authUser, setNotes });
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
