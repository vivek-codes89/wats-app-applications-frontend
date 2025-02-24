import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from '../src/components/RegisterForm';
import LoginForm from '../src/components/LoginForm';
import ChatBox from '../src/components/ChatBox';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />  {/* Default route for "/" path */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    </Router>
  );
};

export default App;
