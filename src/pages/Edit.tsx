import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { deleteReview, editReview } from "../api/bookApi";
import { BookType, EditBookType } from "../types/type";


export const Edit = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [newReview, setNewReview] = useState<EditBookType>();

  const onSubmit = async (data: EditBookType) => {
    console.log(data);
    setNewReview(data);
  };

  const article = {
    title: newReview.title,
    url: newReview.url,
    detail: newReview.detail,
    review: newReview.review,
  };

  //detailの表示を直せたら、コンポート切り分ける
  const onClickEdit = async () => {
    const res = await editReview(id, article);
    console.log(res);
    navigate(`/detail/${id}`);
  };

  const onClickDelete = () => {
    console.log(id);
    deleteReview(id);
  };

  return (
    <div className="wrapper">
      <h1>書籍レビューの編集画面</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>タイトル</p>
        {/* <p>{review[0].title}</p> */}
        <input {...register("title")}></input>
        <p>url</p>
        {/* <p>{review[0].url}</p> */}
        <input {...register("url")}></input>
        <p>詳細</p>
        {/* <p>{review[0].detail}</p> */}
        <input {...register("detail")}></input>
        <p>レビュー</p>
        <input {...register("review")}></input>
        <br />
        <button onClick={onClickDelete}>削除</button>
        <button onClick={onClickEdit}>編集</button>
      </form>
      <p>idは{id}</p>
      <Link to={`/detail/${id}`}>戻る</Link>
    </div>
  );
};
export default Edit;
