import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import DialogsPage from "./pages/DialogsPage";
import UsersPage from './pages/UsersPage';
import Footer from './components/Footer';
import WelcomePage from "./pages/WelcomePage";
import './App.css';

function App() {

    return (
        <div className='team-network'>
            <Header/>
            <Navbar/>
            <div className='team-network__content'>
                <Routes>
                    <Route path='/' element={<WelcomePage/>}/>
                    <Route path='/profile/:id?' element={<ProfilePage/>}/>
                    <Route path='/dialogs' element={<DialogsPage/>}/>
                    <Route path='/users' element={<UsersPage/>}/>
                    {/*<Route path='*' element={<NotFound/>}/>*/}
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
