import { useNavigate } from 'react-router-dom';

export const HandleHome = () => {
  const Navigate = useNavigate();
  Navigate('/home');
};
