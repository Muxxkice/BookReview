import axios from "axios";
import { useReview } from "../compornents/useReview";
import { useParams } from "react-router-dom";

type BookType = {
  id: string;
  title: string;
  url: string;
  detail: string;
  review: string;
  reviewer: string;
  isMine: boolean;
};
export const deleteReview = (id) => {
  axios
    .delete(`books/${id}`)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};

export const newbook = (data) => {
  axios.post(`/books`, data).then((res) => {
    console.log(res);
    return res.statusText;
    //	navigate(`/detail/${id}`)
  });
};

//書籍一覧取得
export const getBooklist = () => {
  return axios
    .get<Array<BookType>>(`/public/books`)
    .catch((e) => console.log(e));
};

export const getPublicBooklist = () => {
  return axios.get(`/books`).catch((e) => console.log(e));
};

//詳細
export const getReview = (id ) => {
  console.log(id);
  return (
		axios
    .get(`/books/${id}`)
    .catch((e) => console.log(e))
	)
};
//追加の本の情報
export const getReviewMore = (offset) => {
  console.log(offset)
    return (
      axios
      .get(`/books?offset=${offset}`)
      .catch((e) => console.log(e))
    )


};
///books/public?offset=20 認証ユーザー

