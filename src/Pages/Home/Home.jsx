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
import firebasePrueba from '../../helpers/firebasePrueba';
import { ContextUser } from '../../Utils/context';
const Home = () => {
  const HandleFire = async () => {
    const collectionPrueba = collection(db, 'prueba');

    await addDoc('COLLECTIONFIRE', {
      name: 'Juan',
      important: true,
    });
  };

  useEffect(() => {
    firebasePrueba();
  }, [firebasePrueba]);
  const { authUser, setAuthUser } = useContext(ContextUser);
  return (
    <div>
      {authUser.isLoggedIn === true ? (
        <>
          <h1>Welcome {authUser.name}</h1>
          <button onClick={HandleFire}>Add</button>
          <Link to="/notes/add"  >Notas</Link>
          {/* <button onClick={querySnapshot}>Query</button>  */}
        </>
      ) : (
        <NoUser />
      )}
    </div>
  );
};

export default Home; // export Home
