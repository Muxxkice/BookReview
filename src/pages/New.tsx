import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { newbook } from "../api/bookApi";
import { BookType } from "../types/type";
import { useTime } from "../compornents/useTime";
import { Alert } from "../compornents/Alert";
export const New = () => {
  const {
    register,
    handleSubmit, //errors
  } = useForm();
  const navigate = useNavigate();
  // const { setTime } = useTime();

  const onSubmit = async (data: BookType) => {
    const id = await newbook(data);
    if (id) {
      // setTime(true);
      // <Alert alert={"登録できました"} />
      // setTimeout(() => setTime(false),3000);
      navigate(`/detail/${id}`);
    }
  };

  return (
    // <div className="wrapper">
    <section className="review_container">
      <div className="input_box">
        <h2>書籍レビュー登録画面</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>title</p>
          <input {...register("title", { required: true })}></input>
          <p>url</p>
          <input {...register("url")}></input>
          <p>detail</p>
          <textarea {...register("detail")}></textarea>
          <p>review</p>
          <textarea {...register("review")}></textarea>
          <br />
          <button className="primary_btn">登録</button>
          {/* <button className="secondary_btn ">リセット</button> */}
        </form>
      </div>
      <Link to="/">Home</Link>
    </section>
    // </div>
  );
};
export default New;
