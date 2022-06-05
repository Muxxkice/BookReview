import * as React from 'react';
import { useState } from "react";
export var LikeButton = function () {
    var _a = useState(false), liked = _a[0], setLiked = _a[1];
    var onClickLiked = function () {
        console.log("like");
        setLiked(!liked);
    };
    return (React.createElement("button", { className: "secondary_btn", onClick: onClickLiked }, liked ? "いいね済み" : "いいね前"));
};
export default LikeButton;
//# sourceMappingURL=LikeButton.js.map