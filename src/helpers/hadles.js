import { useNavigate } from 'react-router-dom';
import types from './types';

export const HandleHome = () => {
  const Navigate = useNavigate();
  Navigate('/home');
};

export const handleLoginGoogle = (id, name ) => {
  return {
    payload: {
      id,
      name,
    },
    type: types.LOGIN_GOOGLE,
  };
};
