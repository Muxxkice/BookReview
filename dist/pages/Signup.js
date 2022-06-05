var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../compornents/useAuth";
export var Signup = function () {
    var signupUser = useAuth().signupUser;
    var _a = useForm(), register = _a.register, errors = _a.formState.errors, handleSubmit = _a.handleSubmit;
    var onSubmit = function (data) {
        signupUser(data);
    };
    return (React.createElement("div", { className: "flex" },
        React.createElement("section", { className: "top_container" },
            React.createElement("div", { className: "input_box" },
                React.createElement("h2", null, "\u30E6\u30FC\u30B6\u30FC\u767B\u9332"),
                React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                    React.createElement("p", null, "\u540D\u524D"),
                    React.createElement("input", __assign({}, register("name", { required: true }))),
                    React.createElement("span", null, "\u5FC5\u9808"),
                    errors.name && React.createElement("span", null, "\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
                    React.createElement("p", null, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"),
                    React.createElement("input", __assign({}, register("email", { required: true }))),
                    React.createElement("span", null, "\u5FC5\u9808"),
                    errors.email && React.createElement("span", null, "\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
                    React.createElement("p", null, "\u30D1\u30B9\u30EF\u30FC\u30C9"),
                    React.createElement("input", __assign({}, register("password", { required: true }))),
                    React.createElement("span", null, "\u5FC5\u9808"),
                    errors.password && React.createElement("span", null, "\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
                    React.createElement("br", null),
                    React.createElement("button", { className: "primary_btn" }, "\u767B\u9332")),
                React.createElement("p", null, "\u65E2\u306B\u767B\u9332\u6E08\u307F\u306E\u5834\u5408"),
                React.createElement("button", { className: "secondary_btn" },
                    React.createElement(Link, { to: "/login" }, "\u30ED\u30B0\u30A4\u30F3"))))));
};
export default Signup;
//# sourceMappingURL=Signup.js.map