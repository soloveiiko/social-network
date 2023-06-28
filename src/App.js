import React from 'react';
import {Route, Routes,  useParams, Navigate} from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './pages/profile/profile';
import Dialogs from "./pages/dialogs/dialogs";
import Users from './pages/users/users';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Footer from './components/footer/footer';
// import { useParams, Navigate } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='team-network'>
      <Header />
      <Navbar />
      <div className='team-network__content'>
        <Routes>
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/users' element={<Users />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          {/*<Route path='*' element={<NotFound/>}/>*/}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
