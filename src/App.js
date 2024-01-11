import {Routes, Route} from 'react-router-dom';
import './App.css';
import IntroPage from './pages/IntroPage.js';
import Settings from './pages/Settings.js';
import Character from './pages/Character/Character.js';

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
