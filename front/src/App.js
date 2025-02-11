import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import AllCats from './pages/AllCatsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HelpUsPage from './pages/HelpUsPage.jsx';
import CatDetailsPage from './pages/CatDetailsPage.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<AllCats/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/nous-aider" element={<HelpUsPage/>} />
        <Route path="/chat/:id" element={<CatDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
