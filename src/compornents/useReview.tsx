import { useEffect, useState } from "react";

import { useAuth } from "./useAuth";
// import Booklog from "./Booklog";
import { getBooklist, getPublicBooklist, getReviewMore } from "../api/bookApi";
import { BookType } from "../types/type";

export const useReview = () => {
  const [bookList, setBookList] = useState<Array<BookType>>([]);
  const { IsAuth } = useAuth();

  useEffect(() => {
    (async () => {
      if (IsAuth) {
        const res = await getBooklist(IsAuth);
        setBookList(res);
      } else {
        const res = await getPublicBooklist();
        setBookList(res);
      }
    })();
  }, []);

  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(10);
  const [data, setData] = useState<Array<BookType>>([]);

  const fetchMore = async () => {
    const books = await getReviewMore(offset);
    setBookList([...bookList, ...books]);
    setData([...data, ...books]);
    setOffset(offset + books.length);
    console.log(bookList);
    if (books.length < 10) {
      setIsEnd(true);
    }
  };

  return {
    bookList,
    data,
    isEnd,
    offset,
    fetchMore,
  };
};
export default useReview;
