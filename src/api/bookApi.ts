import axios from "axios";
import { BookType, APIBookResponseType } from "../types/type";

export const deleteReview = (id: string) => {
  axios
    .delete(`books/${id}`)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};

export const newbook = (data: BookType) => {
  return axios.post(`/books`, data).then<string>((res) => {
    console.log(res);
    return res.data.id;
  });
};

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
    .then((res: APIBookResponseType) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};

export const getPublicReviewMore = (offset: number) => {
  console.log(offset);
  return axios
    .get(`/public/books?offset=${offset}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};

//詳細
export const getReviewDetail = (id: string) => {
  return axios
    .get(`/books/${id}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};

export const editReview = (
  id: string,
  article: Pick<BookType, "title" | "url" | "detail" | "review">,
) => {
  return axios
    .put(`/books/${id}`, article)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};
