import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import RedirecNotes from '../../components/RedirecNotes/RedirecNotes';
import { ContextUser } from '../../Utils/context';
const Home = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  return (
    <div>
      {authUser.isLoggedIn === true ? (
        <>
          <RedirecNotes />
        </>
      ) : (
        <Navigate replace to="/login" />
      )}
    </div>
  );
};

export default Home; // export Home
