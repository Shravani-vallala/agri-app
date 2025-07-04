
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginfrom from './loginform';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginfrom />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
