import {Routes, Route} from 'react-router-dom';
import './App.css';
import IntroPage from './pages/IntroPage.js';
import Settings from './pages/Settings.js';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
