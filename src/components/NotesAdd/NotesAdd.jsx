import { useContext } from 'react';
import { addNote } from '../../helpers/ActionFire';
import { ContextUser } from '../../Utils/context';
import AddNote from './StyledAddNote';
import { MdContentPaste, MdCategory, MdImage, MdTitle } from 'react-icons/md';
const NotesAdd = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  const Handle = (evt) => {
    evt.preventDefault();
    addNote({ evt, uid: authUser.uid });
  };
  return (
    <AddNote>
      <h1>AddNotes</h1>
      <form onSubmit={Handle}>
        <div className="inputGroup">
          <label>
            <MdTitle />
            <input placeholder="Title" type="text" name="title" required />
          </label>
          <label className='impCheck'>
            Important
            <input type="checkbox" value={true} name="important" />
          </label>
          <label>
            <MdCategory />
            <select name="category">
              <option value="school"> school </option>
              <option value="work">work</option>
              <option value="daily">daily</option>
            </select>
          </label>
          {/* <label>
          <MdImage />
          <input placeholder="img" name="img" type="text" required />
        </label> */}
        </div>
        <label className="textContent">
          <MdContentPaste />
          <textarea name="content" />
        </label>
        <div className="btnAdd">
          <button>addNote</button>
        </div>
      </form>
    </AddNote>
  );
};

export default NotesAdd;
