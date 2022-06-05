import axios from "axios";
export var signup = function (newUser) {
    return axios
        .post("/users", newUser)
        .catch(function () { return alert("登録できませんでした"); });
};
export var signin = function (user) {
    return axios
        .post("/signin", user)
        .catch(function () { return alert("ログインできませんでした"); });
};
export var getUser = function () {
    return axios.get("/users");
};
export var changeUserName = function (data) {
    var article = { name: data.name };
    return axios
        .put("/users", article)
        .catch(function () { return alert("変更できませんでした"); });
};
//# sourceMappingURL=userApi.js.map