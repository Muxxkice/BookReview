import axios from "axios";
import {
  BookType,
  ResponseBookType,
  APIBookResponseType,
  EditBookType,
} from "../types/type";

//書籍一覧取得
export const getBooklist = () => {
  return axios
    .get(`/books`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e.status));
};

export const getPublicBooklist = () => {
  return axios
    .get(`/public/books`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};

export const getMyBooklist = (offset: number) => {
  return axios
    .get(`/books?offset=${offset}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};

//追加の本の情報
export const getReviewMore = (offset: number) => {
  return axios
    .get(`/books?offset=${offset}`)
    .then((res) => {
      if (res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch((e) => console.log(e));
};

export const getPublicReviewMore = (offset: number) => {
  return axios
    .get(`/public/books?offset=${offset}`)
    .then((res) => {
      if (res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch((e) => console.log(e));
};

//詳細
export const getReviewDetail = (id: string) => {
  return axios
    .get(`/books/${id}`)
    .then((res) => {
      if (res.data.length > 0) {
        return res.data;
      }
    })
    .catch((e) => console.log(e));
};

export const editReview = (id: string, article: EditBookType) => {
  return axios
    .put(`/books/${id}`, article)
    .then((res) => {
      console.log("editReview");
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};

//削除
export const deleteReview = (id: string) => {
  axios
    .delete(`books/${id}`)
    .then((res) => {
      if (res.data.length > 0) {
        return res.data;
      }
    })
    .catch((e) => console.log(e));
};

//追加
export const newbook = (data: BookType) => {
  return axios.post(`/books`, data).then<string>((res) => {
    console.log(res);
    return res.data.id;
  });
};
