import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import NavBar from '../components/Navbar/NavBar';
import Notes from '../Pages/Notes/Notes';
import Register from '../Pages/RegisterUser/Register';
import Search from '../Pages/Search/Search';
import NotesAdd from '../components/NotesAdd/NotesAdd';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* {location.pathname === '/login' ? '' : <NavBar />} */}
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/add" element={<NotesAdd />} />
        <Route path="/register" element={<Register />} />
        <Route path='/notes/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
