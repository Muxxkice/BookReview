import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../compornents/Loading";
import { BookType } from "../types/type";
import {useReview} from "../compornents/useReview"

export const Detail = () => {
  const { id } = useParams();
  const {book } = useReview();
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <h1>書籍レビューの詳細</h1>
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
      <Link to="/">トップ</Link>
      {/* <Link to="/mypage">マイページ</Link> */}
    </div>
  );
};
export default Detail;
