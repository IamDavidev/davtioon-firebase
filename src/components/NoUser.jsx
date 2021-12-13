import { useNavigate } from 'react-router-dom';

const NoUser = () => {
  const navigate = useNavigate();
  const HandleLogin = () => {
    navigate('/login');
  };
  return (
    <div className="noUser">
      <h1>No user</h1>
      <p>Please login to view your profile</p>
      <button onClick={HandleLogin}>login</button>
    </div>
  );
};

export default NoUser;
