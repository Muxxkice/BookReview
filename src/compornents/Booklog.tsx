import { useNavigate } from "react-router-dom";

import { useAuth } from "./useAuth";
import LikeButton from "./LikeButton";
import useReview from "./useReview";
import { onClickGetReview } from "./useReview";
import { getReview } from "../api/bookApi";
import { useBookReview } from "../compornents/useBookReview";

const Booklog = () => {
  const { bookList, setReview } = useReview();
  const { isEnd, fetchMore, data } = useBookReview();
  const navigate = useNavigate();
  const { IsAuth } = useAuth();

  const User_map = bookList.map((user) => {
    return (
      <div key={user.id} className="booklog_content">
        <dt>タイトル</dt>
        <a href={user.url}>{user.title}</a>
        <dt>詳細</dt>
        <dd className="line_wrap">{user.detail}</dd>
        <button
          className="secondary_btn"
          onClick={() => {
            navigate(`/detail/${user.id}`);
          }}
        >
          詳細
        </button>
        <div className="user_review">
          <dt>レビュー</dt>
          <dd className="line_wrap">{user.review}</dd>
          <dt>レビュワー</dt>
          <dd>{user.reviewer}</dd>
          {IsAuth && <LikeButton />}
        </div>
      </div>
    );
  });

  return <>{User_map}</>;
};
export default Booklog;
