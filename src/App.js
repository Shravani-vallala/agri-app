import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import FarmerEquipmentsPage from './FarmerEquipmentsPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< FarmerEquipmentsPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={< Login/>} />


      </Routes>
    </Router>
  );
}
