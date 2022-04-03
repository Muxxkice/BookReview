import React from "react";
// import { memo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

import './App.css';
import Page404 from "./Page404";


function App() {
  return (
    <>
      <Router>
        <h1>Hello World</h1>
        <div>
          <nav className="top_nav">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/signup'>ユーザー登録</Link>
              </li>
              <li>
                <Link to='/login'>ログイン</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
        {/* <Route path="/" element={}/> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
