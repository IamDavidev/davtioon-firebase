import { useContext } from 'react';
import { addNote } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';
import AddNote from './StyledAddNote';
import {
  MdContentPaste,
  MdCategory,
  MdTitle,
  MdDownloadDone,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const NotesAdd = () => {
  const { authUser } = useContext(ContextUser);
  const navigate = useNavigate();
  const HandleAddNote = (evt) => {
    evt.preventDefault();
    addNote({ evt, uid: authUser.uid, nav: navigate });
  };
  return (
    <AddNote>
      <h1>AddNotes</h1>
      <form onSubmit={HandleAddNote}>
        <div className="inputGroup">
          <label>
            <MdTitle />
            <input
              placeholder="Title"
              type="text"
              name="title"
              required
              autoComplete
            />
          </label>
          <label className="impCheck">
            Important
            <input type="checkbox" value={true} name="important" autoComplete />
          </label>
          <label>
            <MdCategory />
            <select name="category">
              <option value="school"> school </option>
              <option value="work">work</option>
              <option value="daily">daily</option>
              <option value="others">others</option>
              <option value="ideas">ideas</option>
            </select>
          </label>
        </div>
        <label className="textContent">
          <MdContentPaste />
          <textarea name="content" />
        </label>
        <div className="btnAdd">
          <button>
            <MdDownloadDone />
          </button>
        </div>
      </form>
    </AddNote>
  );
};

export default NotesAdd;
