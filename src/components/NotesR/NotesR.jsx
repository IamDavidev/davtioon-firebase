import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import StyledNotesR from './StyledNotesR';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

const NotesR = ({ notes, Tnotes }) => {
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
                  <p>{note.content}</p>
                  <span>{note.id}</span>
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
