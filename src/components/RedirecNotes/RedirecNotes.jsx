import { useContext, useState } from 'react';
import { GetNotesByCategory } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';
import { useNavigate } from 'react-router-dom';
const RedirecNotes = () => {
  const navigate = useNavigate();
  return (
    <div className="Redirectntoes">
      <div className="allNotes">
        <h2>notes</h2>
        <button
          onClick={()=>{
            navigate('/notes')
          }}
        >allNotes</button>
      </div>
      <div className="category">
        <h2>Category</h2>
        <button
          onClick={() => {
            navigate('/notes/category/daily');
          }}
        >
          daily
        </button>
        <button
          onClick={() => {
            navigate('/notes/category/ideas');
          }}
        >
          ideas
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
          work
        </button>
        <button
          onClick={() => {
            navigate('/notes/category/others');
          }}
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
