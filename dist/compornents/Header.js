import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
export var Header = function () {
    var _a = useAuth(), deleteToken = _a.deleteToken, userName = _a.userName, IsAuth = _a.IsAuth;
    var location = useLocation();
    var navigate = useNavigate();
    var _b = useState(true), pathname = _b[0], setPathname = _b[1];
    var onClicklogout = function () {
        deleteToken();
        navigate("/login");
    };
    useEffect(function () {
        if (location.pathname === "/") {
            setPathname(false);
        }
    }, []);
    if (IsAuth) {
        return (React.createElement("header", null,
            React.createElement("p", null,
                "user:",
                userName),
            React.createElement("nav", { className: "header_nav" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/profile" }, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/new" }, "\u66F8\u7C4D\u30EC\u30D3\u30E5\u30FC\u767B\u9332")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/mypage" }, "\u30DE\u30A4\u30DA\u30FC\u30B8")),
                    pathname && React.createElement("button", { className: "primary_btn" },
                        React.createElement(Link, { to: "/" }, "\u30C8\u30C3\u30D7\u306B\u623B\u308B")),
                    React.createElement("button", { className: "secondary_btn", onClick: onClicklogout }, "\u30ED\u30B0\u30A2\u30A6\u30C8")))));
    }
    else {
        return (React.createElement("header", null,
            React.createElement("nav", { className: "header_nav" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/login" }, "\u30ED\u30B0\u30A4\u30F3")),
                    pathname && React.createElement("button", { className: "primary_btn" },
                        React.createElement(Link, { to: "/" }, "\u30C8\u30C3\u30D7\u306B\u623B\u308B")),
                    React.createElement("button", null,
                        React.createElement(Link, { to: "/signup" }, "\u65B0\u898F\u767B\u9332"))))));
    }
};
export default Header;
//# sourceMappingURL=Header.js.map