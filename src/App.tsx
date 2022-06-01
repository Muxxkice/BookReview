import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import New from "./pages/New";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Mypage from "./pages/Mypage";
import { useAuth } from "./compornents/useAuth";

const App = () => {
  const { IsAuth, test } = useAuth();
  if (!test) {
    return null;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={IsAuth ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={IsAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new" element={<New />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>

  );

};

export default App;
