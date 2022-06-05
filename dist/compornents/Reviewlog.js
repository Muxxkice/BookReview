import React from "react";
import { useBookReview } from "./useBookReview";
export var Reviewlog = function () {
    var _a = useBookReview(), isEnd = _a.isEnd, fetchMore = _a.fetchMore, data = _a.data;
    var data_map = data.map(function (review, index) {
        return (React.createElement("div", { key: index, className: "booklog_content" },
            React.createElement("dt", null, "\u30BF\u30A4\u30C8\u30EB"),
            React.createElement("a", { href: review.url }, review.title),
            React.createElement("dt", null, "\u8A73\u7D30"),
            React.createElement("dd", { className: "line_wrap" }, review.detail),
            React.createElement("button", { className: "secondary_btn" }, "\u8A73\u7D30"),
            React.createElement("div", { className: "user_review" },
                React.createElement("dt", null, "\u30EC\u30D3\u30E5\u30FC"),
                React.createElement("dd", { className: "line_wrap" }, review.review),
                React.createElement("dt", null, "\u30EC\u30D3\u30E5\u30EF\u30FC"),
                React.createElement("dd", null, review.reviewer))));
    });
    return (React.createElement(React.Fragment, null,
        data_map,
        !isEnd && React.createElement("button", { onClick: fetchMore }, "\u3082\u3063\u3068\u898B\u308B")));
};
//# sourceMappingURL=Reviewlog.js.map