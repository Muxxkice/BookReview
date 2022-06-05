import React from "react";
import { Link } from "react-router-dom";
import Booklog from "../compornents/Booklog";
import Header from "../compornents/Header";
import Footer from "../compornents/Footer";
import { Reviewlog } from "../compornents/Reviewlog";
var Home = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("main", null,
            React.createElement("div", { className: "main_container" }, " "),
            React.createElement("h2", null, "\u65B0\u7740\u4E00\u89A7"),
            React.createElement(Booklog, null),
            React.createElement(Link, { to: "/login" }, "\u30ED\u30B0\u30A4\u30F3"),
            React.createElement(Reviewlog, null)),
        React.createElement(Footer, null)));
};
export default Home;
//# sourceMappingURL=Home.js.map