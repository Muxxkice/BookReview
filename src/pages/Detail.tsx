import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getReview } from "../api/bookApi";
import { useAuth } from "../compornents/useAuth";
import { BookType } from "../types/type";

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setReview] = useState<BookType>();

  useEffect(() => {
    (async () => {
      const res = await getReview(id);
      setReview(res);
    })();
  }, [id]);

  const review = (
    <div key={book.id}>
      <dl>
        <dt>タイトル</dt>
        <dd>
          <a href={book.url}>{book.title}</a>
        </dd>
        <dt>説明</dt>
        <dd>{book.detail}</dd>
        <dt>レビュー</dt>
        <dd>{book.review}</dd>
        <dt>レビュワー</dt>
        <dd>{book.reviewer}</dd>
      </dl>
      {book.isMine && (
        <button
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        >
          編集
        </button>
      )}
    </div>
  );

  return (
    <div className="wrapper">
      <h1>書籍レビューの詳細</h1>
      {review}
      <div>{review}</div>
      <Link to="/">トップ</Link>
      <Link to="/mypage">マイページ</Link>
    </div>
  );
};
export default Detail;
