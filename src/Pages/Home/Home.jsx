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
import { db } from '../../Firebase/config';
import { ContextUser, StateContext } from '../../Utils/context';
const Home = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  console.log(authUser);
  const logout = ()=>{
    setAuthUser(StateContext);
  }
  return (
    <div>
      {authUser.isLoggedIn === true ? (
        <>
          <h1>Welcome {authUser.name}</h1>
          <Link to="/notes/add">Notas</Link>
          <button onClick={logout}>Query</button> 
        </>
      ) : (
        <NoUser />
      )}
    </div>
  );
};

export default Home; // export Home
