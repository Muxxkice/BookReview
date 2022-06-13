import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { deleteReview, editReview } from "../api/bookApi";
import { EditBookType } from "../types/type";
import { useReview } from "../compornents/useReview";

export const Edit = () => {
  const { id } = useParams();
  const { book, setBook, newReview, setNewReview } = useReview();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: EditBookType) => {
    console.log(data);
    setNewReview(data);
    // setBook(data);
  };

  const article = {
    title: newReview.title,
    url: newReview.url,
    detail: newReview.detail,
    review: newReview.review,
  };

  const onClickEdit = async () => {
    console.log(id, article);
    const res = await editReview(id, article);
    console.log(res);
    setBook(res);
    navigate(`/detail/${id}`);
  };

  const onClickDelete = () => {
    console.log(id);
    deleteReview(id);
    // alert("削除しました");
    setTimeout(() => alert("Hello"), 2000);
    navigate("/");
  };

  return (
    <section className="review_container">
      <div className="input_box">
        <h1>書籍レビューの編集画面</h1>
        <form onChange={handleSubmit(onSubmit)}>
          <p>タイトル</p>
          <p>{book.title}</p>
          <input
            type="text"
            // value={newReview.title}
            {...register("title")}
          ></input>
          <p>url</p>
          <p>{book.url}</p>
          <input
            type="text"
            // value={newReview.url}
            {...register("url")}
          ></input>
          <p>詳細</p>
          <p>{book.detail}</p>
          <textarea
            // value={newReview.detail}
            {...register("detail")}
          >
            {book.detail}
          </textarea>
          <p>レビュー</p>
          <p>{book.review}</p>
          <textarea
            // value={newReview.review}
            {...register("review")}
          ></textarea>
          <br />
          <button className="secondary_btn" onClick={onClickDelete}>
            削除
          </button>
          <button className="primary_btn" onClick={onClickEdit}>
            更新
          </button>
        </form>
        <Link to={`/detail/${id}`}>戻る</Link>
      </div>
    </section>
  );
};
export default Edit;
