import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './pages/profile/profile';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Footer from './components/footer/footer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Users from './pages/users/users';
import './App.css';

function App(props) {
    return (
        <BrowserRouter>
            <div className='team-network'>
                <Header/>
                <Navbar/>
                <div className='team-network__content'>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<Users/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>);
}

export default App;
