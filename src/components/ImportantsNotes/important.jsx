import { useState, useEffect, useContext } from 'react';
import { ƒGetImportantsNotes } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';
import NotesR from '../NotesR/NotesR';
import ButtonGoBack from '../buttonGoBack';
const ImportantNotes = () => {
  const { authUser } = useContext(ContextUser);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    authUser.isLoggedIn && ƒGetImportantsNotes({ authUser, setNotes });
  }, []);
  return (
    <>
      <NotesR notes={notes} Tnotes="Important" />
      <ButtonGoBack />
    </>
  );
};

export default ImportantNotes;
