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
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { deleteReview } from "../api/bookApi";
export var editReview = function (id, article) {
    return axios
        .put("/books/".concat(id), article)
        .then(function (res) {
        console.log(res);
        //	navigate(`/detail/${id}`)
    })
        .catch(function (e) { return console.log(e); });
};
export var Edit = function () {
    var _a = useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var navigate = useNavigate();
    var id = useParams().id;
    var _b = useState([]), newReview = _b[0], setNewReview = _b[1];
    var onSubmit = function (data) {
        console.log(data);
        setNewReview(data);
    };
    var article = {
        title: newReview.title,
        url: newReview.url,
        detail: newReview.detail,
        review: newReview.review,
    };
    //detailの表示を直せたら、コンポート切り分ける
    var onClickEdit = function () {
        //const data = article
        //	const res = editReview(id,data)
        axios
            .put("/books/".concat(id), article)
            .then(function (res) {
            console.log(res);
            navigate("/detail/".concat(id));
        })
            .catch(function (e) { return console.log(e); });
    };
    var onClickDelete = function () {
        console.log(id);
        deleteReview(id);
    };
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("h1", null, "\u66F8\u7C4D\u30EC\u30D3\u30E5\u30FC\u306E\u7DE8\u96C6\u753B\u9762"),
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement("p", null, "\u30BF\u30A4\u30C8\u30EB"),
            React.createElement("input", __assign({}, register("title"))),
            React.createElement("p", null, "url"),
            React.createElement("input", __assign({}, register("url"))),
            React.createElement("p", null, "\u8A73\u7D30"),
            React.createElement("input", __assign({}, register("detail"))),
            React.createElement("p", null, "\u30EC\u30D3\u30E5\u30FC"),
            React.createElement("input", __assign({}, register("review"))),
            React.createElement("br", null),
            React.createElement("button", { onClick: onClickDelete }, "\u524A\u9664"),
            React.createElement("button", { onClick: onClickEdit }, "\u7DE8\u96C6")),
        React.createElement("p", null,
            "id\u306F",
            id),
        React.createElement(Link, { to: "/detail/".concat(id) }, "\u623B\u308B")));
};
export default Edit;
//# sourceMappingURL=Edit.js.map