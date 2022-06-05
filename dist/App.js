import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate, } from "react-router-dom";
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
var App = function () {
    var _a = useAuth(), IsAuth = _a.IsAuth, test = _a.test;
    if (!test) {
        return null;
    }
    return (React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/signup", element: IsAuth ? React.createElement(Navigate, { to: "/" }) : React.createElement(Signup, null) }),
            React.createElement(Route, { path: "/login", element: IsAuth ? React.createElement(Navigate, { to: "/" }) : React.createElement(Login, null) }),
            React.createElement(Route, { path: "/profile", element: React.createElement(Profile, null) }),
            React.createElement(Route, { path: "/new", element: React.createElement(New, null) }),
            React.createElement(Route, { path: "/detail/:id", element: React.createElement(Detail, null) }),
            React.createElement(Route, { path: "/edit/:id", element: React.createElement(Edit, null) }),
            React.createElement(Route, { path: "/mypage", element: React.createElement(Mypage, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(Page404, null) }))));
};
export default App;
//# sourceMappingURL=App.js.map