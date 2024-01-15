import {Routes, Route} from 'react-router-dom';
import './App.css';
import IntroPage from './pages/IntroPage.jsx';
import Settings from './pages/Settings.jsx';
import Character from './pages/Character/Character.jsx';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import 'primeflex/primeflex.css';

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/character" element={<Character />} />
        </Routes>
      </div>
  );
}

export default App;