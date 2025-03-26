import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


// Utilisation de la méthode `ReactDOM.render` pour React 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Assurez-vous que l'élément `root` existe dans `public/index.html`
);

// Supprimer ou commenter `reportWebVitals` si non nécessaire
// Si `reportWebVitals` est mentionné, commentez ou retirez cette ligne
// reportWebVitals();

