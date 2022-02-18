import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
function App() {
  return (
  <Router>
    <div className="App">  
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Layout  />}>
              <Route index element={<Login />} />
              <Route path="sign-in" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="*" element={<Login />} />
            </Route>
          </Routes>
          
        </div>
      </div>
    </div></Router>
  );
}
export default App;