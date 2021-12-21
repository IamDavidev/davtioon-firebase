import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { StyleRedirecNots } from './StyledRedirecNots';
const RedirecNotes = () => {
  const navigate = useNavigate();
  const ƒHandleAdd = () => {
    navigate('/notes/add');
  };
  return (
    <StyleRedirecNots>
      <div className="btnAdd">
        <button onClick={ƒHandleAdd}>
          <MdAdd />
        </button>
      </div>
      <h1>Notes</h1>
      <div className="btnRender">
        <button
          onClick={() => {
            navigate('/notes');
          }}
        >
          All Notes
        </button>

        <h3>Category</h3>
        <button
          onClick={() => {
            navigate('/notes/category/daily');
          }}
        >
          Daily
        </button>
        <button
          onClick={() => {
            navigate('/notes/category/ideas');
          }}
        >
          Ideas
        </button>
        <button
          onClick={() => {
            navigate('/notes/category/school');
          }}
        >
          School
        </button>
        <button
          onClick={() => {
            navigate('/notes/category/work');
          }}
        >
          Work
        </button>
        <button
          onClick={() => {
            navigate('/notes/category/others');
          }}
        >
          others
        </button>

        <button
          className="btnImportant"
          onClick={() => {
            navigate('/notes/important');
          }}
        >
          Important
        </button>
      </div>
    </StyleRedirecNots>
  );
};

export default RedirecNotes;
