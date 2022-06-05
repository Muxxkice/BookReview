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
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { newbook } from "../api/bookApi";
import useAuth from "../compornents/useAuth";
export var New = function () {
    var _a = useForm(), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.errors;
    var _b = useAuth(), cookies = _b.cookies, userName = _b.userName;
    var navigate = useNavigate();
    var id = useParams().id;
    var onSubmit = function (data) {
        newbook(data);
        console.log(data);
        //	navigate(`/detail/${id}`)
    };
    return (
    // <div className="wrapper">
    React.createElement("section", { className: "review_container" },
        React.createElement("div", { className: "input_box" },
            React.createElement("h2", null, "\u66F8\u7C4D\u30EC\u30D3\u30E5\u30FC\u767B\u9332\u753B\u9762"),
            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React.createElement("p", null, "title"),
                React.createElement("input", __assign({}, register("title", { required: true }))),
                React.createElement("p", null, "url"),
                React.createElement("input", __assign({}, register("url"))),
                React.createElement("p", null, "detail"),
                React.createElement("textarea", __assign({}, register("detail"))),
                React.createElement("p", null, "review"),
                React.createElement("textarea", __assign({}, register("review"))),
                React.createElement("br", null),
                React.createElement("button", { className: "primary_btn" }, "\u767B\u9332"),
                React.createElement("button", { className: "secondary_btn " }, "\u30EA\u30BB\u30C3\u30C8"))),
        React.createElement(Link, { to: "/" }, "Home"))
    // </div>
    );
};
export default New;
//# sourceMappingURL=New.js.map