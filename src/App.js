import React from 'react';
import Header from './Components/Header/';
import Navbar from './Components/Navbar/';
import Profile from "./Components/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News";
import Music from "./Components/Music";
import Settings from "./Components/Settings";
import Footer from './Components/Footer';
import './App.css';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className='team-network'>
        <Header />
        <Navbar/>
        <div className='team-network__content'>
          <Routes>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/dialogs' element={<DialogsContainer/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>);
}

export default App;
