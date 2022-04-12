import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import {
//   Routes,
//   Route,
//   BrowserRouter as Router,
// } from "react-router-dom";

// import Top from './pages/Top';
// import Home from "./pages/Home"
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Page404 from "./pages/Page404";
// import Profile from "./pages/Profile";
import App from './App';
import './css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
   {/* <Router>
   <App />
    <Routes>
      <Route exact path="/" element={<Top />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profole" element={<Profile />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Router> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
