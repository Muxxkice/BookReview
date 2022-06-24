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

import { BookType, EditBookType } from "../types/type";

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

  // let books = [
  //   {
  //     id: "",
  //     title: "",
  //     url: "",
  //     detail: "",
  //     review: "",
  //     reviewer: "",
  //     isMine: false,
  //   },
  // ];

  // [Symbol.iterator]()
  //book = [Symbol.iterator]()
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(10);
  const [data, setData] = useState<Array<BookType>>([]);

  const fetchMore = async () => {
    if (IsAuth) {
      const books = await getReviewMore(offset);
      setData([...data, ...books]);
      setOffset(offset + books.length);
      if (books.length < 10) {
        setIsEnd(true);
      }
    } else {
      const books = await getPublicReviewMore(offset);
      setData([...data, ...books]);
      setOffset(offset + books.length);
      if (books.length < 10) {
        setIsEnd(true);
      }
    }
  };

  const { id } = useParams();
  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState<BookType>({
    id: "",
    title: "",
    url: "",
    detail: "",
    review: "",
    reviewer: "",
    isMine: false,
  });

  const [newReview, setNewReview] = useState<EditBookType>({
    title: "",
    url: "",
    detail: "",
    review: "",
  });

  // const getDetail = async (id:string) => {
  //   const res = await getReviewDetail(id);
  //   console.log(res);
  //   setBook(res);
  //   console.log(book);
  //   setNewReview(res);
  //   console.log(newReview);
  // };

//認証トークンがいる
  useEffect(() => {
    (async () => {
      const res = await getReviewDetail(id);
      console.log(res);
      setBook(res);
      console.log(book);
      setNewReview(res);
    })();
  }, [bookId]);

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
    setBook,
    newReview,
    setNewReview,
    setBookId,
    bookId,
  };
};
export default useReview;
