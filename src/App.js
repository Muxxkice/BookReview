import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import New from "./pages/New";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import useAuth from "./compornents/useAuth";

const App = () => {
  const IsAuthenticated = true;
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login"
            element={IsAuthenticated ? <Navigate to="/" /> : < Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<New />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
