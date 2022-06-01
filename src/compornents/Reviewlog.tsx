import React from "react";
import {useBookReview} from "./useBookReview"
import { BookType } from "../types/type";

export const Reviewlog = () => {
  const { isEnd, fetchMore, data } = useBookReview();

  const data_map = data.map((review:BookType,index:number) => {
    return (
      <div key={index} className="booklog_content">
        <dt>タイトル</dt>
        <a href={review.url}>{review.title}</a>
        <dt>詳細</dt>
        <dd className="line_wrap">{review.detail}</dd>
        <button
          className="secondary_btn"
          // onClick={() => {
          //   onClickGetReview(user.id);
          //   navigate(`/detail/${user.id}`);
          // }}
        >
          詳細
        </button>
        <div className="user_review">
          <dt>レビュー</dt>
          <dd className="line_wrap">{review.review}</dd>
          <dt>レビュワー</dt>
          <dd>{review.reviewer}</dd>
          {/* {IsAuth && <LikeButton />} */}
        </div>
      </div>
    );
  });

  return (
    <>
      {data_map}
      {!isEnd && <button onClick={fetchMore}>もっと見る</button>}
    </>
  );
};
