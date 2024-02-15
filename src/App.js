import {Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard.jsx';
import Settings from './pages/Settings.jsx';
import Character from './pages/Character/Character.jsx';
import IntroTheSister1 from './pages/TheSister1/Intro.jsx';
import GiveFood from './pages/TheSister1/GiveFood/GiveFood.jsx';
import AcceptOffer from './pages/TheSister1/GiveFood/AcceptOffer/AcceptOffer.jsx';
import Profile from './pages/Profile.jsx';
import Header from './components/Header.js';
import ContactMe from './pages/ContactMe.jsx';
import Project from './pages/Project.jsx';
import KickDoor from './pages/TheSister1/GiveFood/AcceptOffer/KickDoor/KickDoor.jsx';
import IntroForAll from './pages/IntroForAll/IntroForAll.jsx';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact_me" element={<ContactMe/>} />
            <Route path="/project" element={<Project/>} />

            <Route path="/" element={<Dashboard/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/character" element={<Character/>} />

            <Route path="/intro" element={<IntroForAll/>} />

            <Route path="/the_sister_1/intro" element={<IntroTheSister1/>} />
            <Route path="/the_sister_1/give_food" element={<GiveFood/>} />
            <Route path="/the_sister_1/accept_offer" element={<AcceptOffer/>} />
            <Route path="/the_sister_1/kick_door" element={<KickDoor/>} />
        </Routes>
      </div>
  );
}

export default App;
