import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getReview } from "../api/bookApi";
import { useAuth } from "../compornents/useAuth";
import { BookType } from "../types/type";

export const Detail = () => {
  const { id } = useParams();
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [user, setReview] = useState([]);
  console.log(user);

  useEffect(() => {
    (async () => {
      const res = await getReview(id);
      setReview(res);
    })();
  }, [id]);

  const review = (
    <div key={user.id}>
      <dl>
        <dt>タイトル</dt>
        <dd>
          <a href={user.url}>{user.title}</a>
        </dd>
        <dt>説明</dt>
        <dd>{user.detail}</dd>
        <dt>レビュー</dt>
        <dd>{user.review}</dd>
        <dt>レビュワー</dt>
        <dd>{user.reviewer}</dd>
      </dl>
      {user.isMine && (
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
