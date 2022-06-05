import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../compornents/Header";
import { useAuth } from "../compornents/useAuth";
import useReview from "../compornents/useReview";
export var Mypage = function () {
    var bookList = useReview().bookList;
    var _a = useAuth(), onSubmitLogin = _a.onSubmitLogin, userName = _a.userName;
    var navigate = useNavigate();
    var personal_booklog_map = bookList.map(function (user) {
        if (user.reviewer === userName) {
            return (React.createElement("div", { key: user.id, className: "booklog_content" },
                React.createElement("dt", null, "\u30BF\u30A4\u30C8\u30EB"),
                React.createElement("a", { href: user.url }, user.title),
                React.createElement("dt", null, "\u8A73\u7D30"),
                React.createElement("dd", { className: "line_wrap" }, user.detail),
                React.createElement("dt", null, "\u30EC\u30D3\u30E5\u30EF\u30FC"),
                React.createElement("dd", null, user.reviewer),
                React.createElement("dt", null, "\u30EC\u30D3\u30E5\u30FC"),
                React.createElement("dd", null, user.review),
                React.createElement("button", { onClick: function () {
                        navigate("/detail/".concat(user.id));
                    } }, "\u8A73\u7D30")));
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("main", null,
            bookList ? (React.createElement("h3", null, "\u6295\u7A3F\u5C65\u6B74"))
                : (React.createElement("h3", null, "\u6295\u7A3F\u5C65\u6B74\u304C\u3042\u308A\u307E\u305B\u3093")),
            personal_booklog_map)));
};
export default Mypage;
//# sourceMappingURL=Mypage.js.map