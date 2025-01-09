import './index.css'; // Importation du CSS avec Tailwind
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="bg-blue-500 text-white p-10">Bienvenue sur Les Pattounes !</h1>
    <App />
  </React.StrictMode>
);


