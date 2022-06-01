import axios from "axios";

type BookType = {
  id: string;
  title: string;
  url: string;
  detail: string;
  review: string;
  reviewer: string;
  isMine: boolean;
};
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
export const getBooklist = (IsAuth:boolean) => {
  if (IsAuth) {
    return axios
      .get<Array<BookType>>(`/books`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  } else {
    return axios
      .get(`/public/books`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
};

export const getPublicBooklist = () => {
  return axios.get(`/books`).catch((e) => console.log(e));
};

//詳細
export const getReview = (id: string) => {
  console.log(id);
  return axios.get(`/books/${id}`).catch((e) => console.log(e));
};
//追加の本の情報
export const getReviewMore = (offset:number) => {
  console.log(offset);
  return axios.get(`/books?offset=${offset}`).catch((e) => console.log(e));
};
///books/public?offset=20 認証ユーザー
