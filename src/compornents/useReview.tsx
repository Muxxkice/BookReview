import { useEffect, useState } from "react";

import { useAuth } from "./useAuth";
// import Booklog from "./Booklog";
import {
  getBooklist,
  getPublicBooklist,
  getReviewMore,
  getPublicReviewMore,
  getReviewDetail,
} from "../api/bookApi";
import { BookType } from "../types/type";

export const useReview = () => {
  const [bookList, setBookList] = useState<Array<BookType>>([]);
  const { IsAuth } = useAuth();

  useEffect(() => {
    let res = [];
    (async () => {
      if (IsAuth) {
        res = await getBooklist();
        setBookList(res);
      } else {
        res = await getPublicBooklist();
        setBookList(res);
      }
    })();
  }, []);

  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(10);
  const [data, setData] = useState<Array<BookType>>([]);

  const fetchMore = async () => {
    let books = [];
    if (IsAuth) {
      books = await getReviewMore(offset);
    } else {
      books = await getPublicReviewMore(offset);
    }
    setBookList([...bookList, ...books]);
    setData([...data, ...books]);
    setOffset(offset + books.length);
    // console.log(bookList);
    if (books.length < 10) {
      setIsEnd(true);
    }
  };

  const [book, setBook] = useState<null | Array<BookType>>([]);

  const onClickDetail = async (id) => {
    const res = await getReviewDetail(id);
    console.log(res);
    setBook(res);
  };

  return {
    bookList,
    data,
    isEnd,
    offset,
    fetchMore,
    book,
    onClickDetail,
  };
};
export default useReview;
