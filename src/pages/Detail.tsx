import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../compornents/Loading";
import { useReview } from "../compornents/useReview";

export const Detail = () => {
  const { id } = useParams();
  const { book } = useReview();
  const navigate = useNavigate();

  if (!book) {
    <Loading />;
  }
  console.log(book);

  return (
    <section className="review_container">
      <div className="input_box">
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
              className="primary_btn"
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
            >
              編集
            </button>
          )}
        </div>
        <Link to="/">トップ</Link>
      </div>
    </section>
  );
};
export default Detail;
