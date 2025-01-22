import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import AllCats from './pages/AllCatsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<AllCats/>} />
      </Routes>
    </Router>
  );
}

export default App;
