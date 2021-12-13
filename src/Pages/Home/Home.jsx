import { addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react';
import NoUser from '../../components/NoUser';
import { db } from '../../Firebase/config';
import { ContextUser } from '../../Utils/context';
const Home = () => {
  const HandleFire = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  const { authUser, setAuthUser } = useContext(ContextUser);
  return (
    <div>
      {authUser.isLoggedIn === true ? (
        <>
          <h1>Welcome {authUser.name}</h1>
          <button onClick={HandleFire}>Add</button>
        </>
      ) : (
        <NoUser />
      )}
    </div>
  );
};

export default Home; // export Home
