import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ƒGetAllNotes } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';

const Search = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const { authUser } = useContext(ContextUser);
  const [searchNotes, setsearch] = useState([]);
  const ƒSearchNotes = (evt) => {
    evt.preventDefault();
    if (evt.target.value === '') return setsearch([]);
    setsearch(
      notes.filter((note) =>
        note.title.toLowerCase().includes(evt.target.value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    ƒGetAllNotes({ authUser, setNotes });
  }, []);
  return (
    <div>
      <h1>search</h1>
      <form onSubmit={ƒSearchNotes}>
        <label>
          Search:
          <input onChange={ƒSearchNotes} type="text" name="search" />
        </label>
        {searchNotes.map((notes) => {
          return (
            <div>
              <button
                onClick={()=>{
                  navigate(`/notes/searh/id/${notes.id}`)
                }}
                key={notes.id}
              >
                {notes.title}
              </button>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Search;
