import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SessionStorage from './components/session/SessionStorage';
import SessionStorageredux from './components/session/SessionStorageredux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/session" element={<SessionStorage />} />
            <Route path="/sessionredux" element={<SessionStorageredux />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
