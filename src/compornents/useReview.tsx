import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    (async () => {
      if (IsAuth) {
        const res = await getBooklist();
        setBookList(res);
      } else {
        const res2 = await getPublicBooklist();
        setBookList(res2);
      }
    })();
  }, []);

  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(10);
  const [data, setData] = useState<Array<BookType>>([]);

  // let books = [];
  const fetchMore = async () => {
    if (IsAuth) {
      const books = await getReviewMore(offset);
      setData([...data, ...books]);
      setOffset(offset + books.length);
      if (books.length < 10) {
        setIsEnd(true);
      }
    } else {
      // books = await getPublicReviewMore(offset);
    }
    // setBookList([...bookList, ...books]);
  };

  const { id } = useParams();
  const [book, setBook] = useState<BookType[]>([]);
  useEffect(() => {
    (async () => {
      const res = await getReviewDetail(id);
      console.log(res);
      setBook(res);
    })();
  }, [id]);

  // const onClickDetail = async (id: string) => {
  //   const res = await getReviewDetail(id);
  //   console.log(res);
  //   setBook(res);
  //   console.log(book);
  //   return res.id;
  // };

  // const [mybook, setMyBook] = useState<BookType[]>([]);
  // const [offset_mybook, setOffset_mybook] = useState<number>(10);
  // const [isEnd_mybook, setIsEnd_mybook] = useState<boolean>(false);
  // const [last, setLast] = useState<boolean>(false);
  // const { userName } = useAuth();

  // useEffect(() => {
  //   (async () => {
  //     let res = [];
  //     if (IsAuth && !setLast) {
  //       res = await getMyBooklist(offset_mybook);
  //     }
  //     console.log(res);
  //     res.forEach((book) => {
  //       if (book.reviewer === userName) {
  //         setMyBook([...mybook, ...res]);
  //       }
  //     });
  //     setMyBook([...mybook, ...res]);
  //     setOffset_mybook(offset + res.length);

  //     if (res.length < 10) {
  //       setLast(true);
  //     } else if (setLast) {
  //       setIsEnd_mybook(true);
  //     }
  //   })();
  // }, []);

  return {
    bookList,
    data,
    isEnd,
    offset,
    fetchMore,
    book,
    // mybook,
  };
};
export default useReview;
