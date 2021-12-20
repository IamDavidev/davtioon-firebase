import { MdAdd, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import StyledNotesR from './StyledNotesR';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import SwiperCore, { EffectCards } from 'swiper';
import { ƒDeleteNote } from '../../Firebase/ActionFirebase';
import { useContext } from 'react';
import { ContextUser } from '../../Utils/context';
// install Swiper modules
SwiperCore.use([EffectCards]);

const NotesR = ({ notes, Tnotes }) => {
  const { authUser } = useContext(ContextUser);
  const navigate = useNavigate();
  const ƒHandleAdd = () => {
    navigate('/notes/add');
  };
  return (
    <StyledNotesR>
      <h1>{Tnotes || 'Notes'} </h1>
      <div className="btnAdd">
        <button onClick={ƒHandleAdd}>
          <MdAdd />
        </button>
      </div>
      <div className="notesRender">
        <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
          {notes.map((note) => {
            return (
              <SwiperSlide key={note.id}>
                <div className="note">
                  <strong>{note.category}</strong>
                  {note.important ? (
                    <h3 className="titleI">{note.title}</h3>
                  ) : (
                    <h3>{note.title}</h3>
                  )}
                  <div className="contentNote">
                    <p>{note.content}</p>
                  </div>
                  <span>{note.id}</span>
                  <button
                    onClick={() =>
                      ƒDeleteNote({ user: authUser, id: note.id, navigate })
                    }
                  >
                    <MdDelete />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledNotesR>
  );
};

export default NotesR;
