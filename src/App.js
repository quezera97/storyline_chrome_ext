import {Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard.jsx';
import Settings from './pages/Settings.jsx';
import Character from './pages/Character/Character.jsx';
import IntroTheSister1 from './pages/TheSister1/Intro.jsx';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import 'primeflex/primeflex.css';
import GiveFood from './pages/TheSister1/FirstChoice/GiveFood/GiveFood.jsx';
import AcceptOffer from './pages/TheSister1/FirstChoice/GiveFood/AcceptOffer/AcceptOffer.jsx';

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/character" element={<Character />} />
            <Route path="/the_sister_1/intro" element={<IntroTheSister1 />} />
            <Route path="/the_sister_1/give_food" element={<GiveFood />} />
            <Route path="/the_sister_1/accept_offer" element={<AcceptOffer />} />
        </Routes>
      </div>
  );
}

export default App;