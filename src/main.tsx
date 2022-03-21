import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { CountriesProvider } from './context';

render(
  <React.StrictMode>
    <CountriesProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </CountriesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
