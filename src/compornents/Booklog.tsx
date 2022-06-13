import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./useAuth";
import LikeButton from "./LikeButton";
import { BookType } from "../types/type";
import { useReview } from "./useReview";

const Booklog = (props) => {
  const navigate = useNavigate();
  const { bookId,setBookId } = useReview();
  const { IsAuth } = useAuth();
  const bookList = props.bookList;

  const User_map = bookList.map((book: BookType, index: number) => {
    return (
      <div key={index} className="booklog_content">
        <dt>タイトル</dt>
        <a href={book.url}>{book.title}</a>
        <dt>詳細</dt>
        <dd className="line_wrap">{book.detail}</dd>
        <button
          className="secondary_btn"
          onClick={async () => {
            setBookId(book.id)
            console.log(bookId)
            navigate(`/detail/${book.id}`);
            // navigate(`/detail/${book.id}`);
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

  return <>{User_map}</>;
};
export default Booklog;
