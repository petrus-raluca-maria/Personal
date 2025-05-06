import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoginPage from './pages/LoginPage';
import CreateArticle from './pages/CreateArticle';
import ShowArticle from './pages/ShowArticle';
import EditArticle from './pages/EditArticle';
import DeleteArticle from './pages/DeleteArticle';

const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<Register/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/loginpage' element={<LoginPage />} />
      <Route path='/clothes/create' element={<CreateArticle />} />
      <Route path='/clothes/details/:id' element={<ShowArticle />} />
      <Route path='/clothes/edit/:id' element={<EditArticle />} />
      <Route path='/clothes/delete/:id' element={<DeleteArticle />} />
    </Routes>
  );
};

export default App;
