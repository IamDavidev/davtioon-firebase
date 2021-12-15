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

const NotesR = ({ notes }) => {
  // const navigate = useNavigate();
  // const ƒHandleAdd = () => {
  //   navigate('/notes/add');
  // };

  return (
    <StyledNotesR>
      <h1>Your Notes</h1>
      <div className="btnAdd">
        <button onClick={ƒHandleAdd}>
          <MdAdd />
        </button>
      </div>
      <div className='notesRender'>
        <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
          {notes.map((note) => {
            return (
              <SwiperSlide key={note.id}>
                <div className="note">
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
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
