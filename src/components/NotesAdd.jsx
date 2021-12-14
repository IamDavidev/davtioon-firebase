import { addNote } from "../helpers/ActionFire";


const NotesAdd = () => {
  const Handle = (evt) => {
    evt.preventDefault();
    addNote({ evt });
  };
  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={Handle}>
        <label>
          title
          <input type="text" name="title" required />
        </label>
        <label>
          content
          <input type="text" name="content" required />
        </label>
        <label>
          important
          <input type="checkbox" value={true} name="important"  />
        </label>
        <label>
          category
          <select name="category">
            <option value="school"> school </option>
            <option value="work">work</option>
            <option value="daily">daily</option>
          </select>
        </label>
        <label>
          img url
          <input name="img" type="text" required />
        </label>
        <button>addNote</button>
      </form>
    </div>
  );
};

export default NotesAdd;
