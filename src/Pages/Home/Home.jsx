import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NoUser from '../../components/NoUser';
import RedirecNotes from '../../components/RedirecNotes/RedirecNotes';
import { db } from '../../Firebase/config';
import { ContextUser, StateContext } from '../../Utils/context';
const Home = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  return (
    <div>
      {authUser.isLoggedIn === true ? (
        <>
          <RedirecNotes />
        </>
      ) : (
        <NoUser />
      )}
    </div>
  );
};

export default Home; // export Home
