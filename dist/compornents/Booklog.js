import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import LikeButton from "./LikeButton";
import useReview from "./useReview";
var Booklog = function () {
    var bookList = useReview().bookList;
    var navigate = useNavigate();
    var IsAuth = useAuth().IsAuth;
    var User_map = bookList.map(function (book) {
        return (React.createElement("div", { key: book.id, className: "booklog_content" },
            React.createElement("dt", null, "\u30BF\u30A4\u30C8\u30EB"),
            React.createElement("a", { href: book.url }, book.title),
            React.createElement("dt", null, "\u8A73\u7D30"),
            React.createElement("dd", { className: "line_wrap" }, book.detail),
            React.createElement("button", { className: "secondary_btn", onClick: function () {
                    navigate("/detail/".concat(book.id));
                } }, "\u8A73\u7D30"),
            React.createElement("div", { className: "user_review" },
                React.createElement("dt", null, "\u30EC\u30D3\u30E5\u30FC"),
                React.createElement("dd", { className: "line_wrap" }, book.review),
                React.createElement("dt", null, "\u30EC\u30D3\u30E5\u30EF\u30FC"),
                React.createElement("dd", null, book.reviewer),
                IsAuth && React.createElement(LikeButton, null))));
    });
    return React.createElement(React.Fragment, null, User_map);
};
export default Booklog;
//# sourceMappingURL=Booklog.js.map