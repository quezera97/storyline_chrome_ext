import {Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard.jsx';
import Settings from './pages/Settings.jsx';
import Character from './pages/Character/Character.jsx';
import IntroTheSister1 from './pages/TheSister1/Intro.jsx';
import GiveFood from './pages/TheSister1/FirstChoice/GiveFood/GiveFood.jsx';
import AcceptOffer from './pages/TheSister1/FirstChoice/GiveFood/AcceptOffer/AcceptOffer.jsx';
import Portfolio from './pages/Portfolio.jsx';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/portfolio" element={<Portfolio />} />

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

// You will be provided with code snippets and your task is to use these, plus any of your own code, to complete a portfolio app that contains:
// A header with external links to social media accounts and internal links to other sections of the page. (done)
// A landing section with an avatar picture and a short bio.(done)
// A section to display your featured projects as cards in a grid fashion.
// A contact me section with a form to allow visitors to contact you.

// Review the final project
// Did the header have external links that take you to different social apps?
// Did the header have internal links that, when clicked, will smoothly scroll into their corresponding section?
// Was the landing section filled with an avatar, name and a short bio?
// Did the project section display a 2x2 grid with each project rendered in a card widget?
// Was the Contact Me form business logic implemented as per the requirements?
// Was the header hidden/shown depending on the scroll direction? Did it happen with a smooth transition animation?
// Can you suggest any improvements for the portfolio app?
