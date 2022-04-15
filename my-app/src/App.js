import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Top from './pages/Top';
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import New from "./pages/New";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/top" element={<Top />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<New />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
