import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure this import is correct
import App from './App'; // Import your App component
import './index.css'; // Import any styles (optional)

// Make sure the root element exists in your public/index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
