import { useContext, useState } from 'react';
import { GetNotesByCategory } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';
import { useNavigate } from 'react-router-dom';
const RedirecNotes = () => {
  const { authUser, setAuthUser, setNotes, notes } = useContext(ContextUser);
  const navigate = useNavigate();
  const { uid } = authUser;
  console.log(notes);
  return (
    <div className="Redirectntoes">
      <div className="allNotes">
        <h2>notes</h2>
        <button>allNotes</button>
      </div>
      <div className="category">
        <h2>Category</h2>
        <button
          onClick={() =>
            GetNotesByCategory({ uid, category: 'daily', setNotes })
          }
        >
          daily
        </button>
        <button
          onClick={() =>
            GetNotesByCategory({ uid, category: 'ideas', setNotes })
          }
        >
          ideas
        </button>
        <button
          onClick={() =>
            GetNotesByCategory({ uid, category: 'school', setNotes })
          }
        >
          School
        </button>
        <button
          onClick={() =>
            GetNotesByCategory({ uid, category: 'work', setNotes })
          }
        >
          work
        </button>
        <button
          onClick={() =>
            GetNotesByCategory({ uid, category: 'others', setNotes })
          }
        >
          others
        </button>
      </div>
      <div className="Importante">
        <h2>In</h2>

        <button>inportant</button>
      </div>
    </div>
  );
};

export default RedirecNotes;
