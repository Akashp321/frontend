import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Container } from '@mui/material';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SessionStorage from './components/session/SessionStorage';
function App() {
  return (
      <Router>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/session" element={<SessionStorage />} />
          </Routes>
        </Container>
      </Router>
  );
}

export default App;
