import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./useAuth";
import LikeButton from "./LikeButton";
import useReview from "./useReview";
import { BookType } from "../types/type";

const Booklog = (props) => {
  // const { bookList } = useReview();
  const navigate = useNavigate();
  const { IsAuth } = useAuth();
  console.log(props.bookList)
  const  bookList = props.bookList

  // useEffect(() => {
  //   (async () => {
  //     console.log("bookListが更新されたよ")
  //     console.log(bookList)
  //   })();
  // }, [bookList]);


  const User_map = bookList.map((book: BookType,index:number) => {
    return (
      <div key={index} className="booklog_content">
        <dt>タイトル</dt>
        <a href={book.url}>{book.title}</a>
        <dt>詳細</dt>
        <dd className="line_wrap">{book.detail}</dd>
        <button
          className="secondary_btn"
          onClick={() => {
            navigate(`/detail/${book.id}`);
          }}
        >
          詳細
        </button>
        <div className="user_review">
          <dt>レビュー</dt>
          <dd className="line_wrap">{book.review}</dd>
          <dt>レビュワー</dt>
          <dd>{book.reviewer}</dd>
          {IsAuth && <LikeButton />}
        </div>
      </div>
    );
  });

  return (
  <>
  {/* {bookList.map((book) => {
  return ( <Reviewlog book = {book}/>)
  })} */}
  {User_map}
  </>);
};
export default Booklog;
