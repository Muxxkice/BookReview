import axios from "axios";
export var deleteReview = function (id) {
    axios
        .delete("books/".concat(id))
        .then(function (data) {
        console.log(data);
    })
        .catch(function (e) { return console.log(e); });
};
export var newbook = function (data) {
    axios.post("/books", data).then(function (res) {
        console.log(res);
        return res.statusText;
        //	navigate(`/detail/${id}`)
    });
};
//書籍一覧取得
export var getBooklist = function (IsAuth) {
    if (IsAuth) {
        return axios
            .get("/books")
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.log(e); });
    }
    else {
        return axios
            .get("/public/books")
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.log(e); });
    }
};
export var getPublicBooklist = function () {
    return axios.get("/books").catch(function (e) { return console.log(e); });
};
//詳細
export var getReview = function (id, isAuth) {
    console.log(id);
    return axios.get("/books/".concat(id)).catch(function (e) { return console.log(e); });
};
//追加の本の情報
export var getReviewMore = function (offset) {
    console.log(offset);
    return axios.get("/books?offset=".concat(offset)).catch(function (e) { return console.log(e); });
};
///books/public?offset=20 認証ユーザー
//# sourceMappingURL=bookApi.js.map