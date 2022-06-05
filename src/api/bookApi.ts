import axios from "axios";
import { BookType } from "../types/type";

export const deleteReview = (id: string) => {
  axios
    .delete(`books/${id}`)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};

export const newbook = (data: BookType) => {
  axios.post(`/books`, data).then((res) => {
    console.log(res);
    return res.statusText;
    //	navigate(`/detail/${id}`)
  });
};

//書籍一覧取得
export const getBooklist = (IsAuth) => {
  if (IsAuth) {
    console.log("isaunth");
  }
  return (
    axios
      .get<Array<BookType>>(`/books`)
      // .then((res) => console.log(res))
      .catch((e) => console.log(e))
  );
  // }
  // else {
  //   return axios
  //     .get<Array<BookType>>(`/public/books`)
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));
  // }
};

export const getPublicBooklist = () => {
  return axios.get(`/books`).catch((e) => console.log(e));
};

//詳細
export const getReview = (id: string, isAuth: boolean) => {
  console.log(id);
  return axios
    .get<Array<BookType>>(`/books/${id}`)
    .catch((e) => console.log(e));
};
//追加の本の情報
export const getReviewMore = (offset: number) => {
  return axios.get(`/books?offset=${offset}`).catch((e) => console.log(e));
};
///books/public?offset=20 認証ユーザー
