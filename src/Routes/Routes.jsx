import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Login from '../Pages/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' />} />

      </Routes>
    </BrowserRouter>
  );
};



export default AppRoutes;