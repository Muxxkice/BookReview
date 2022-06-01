import React from "react";
import { useForm } from "react-hook-form";
import {
	Link, useNavigate
} from "react-router-dom";
import { useParams } from "react-router-dom"

import{newbook} from "../api/bookApi"
import useAuth from "../compornents/useAuth"
import { BookType } from "../types/type";

export const New = () => {
	const { register, handleSubmit, errors } = useForm();
	const { cookies, userName } = useAuth()
	const navigate = useNavigate();
	const { id } = useParams();

	const onSubmit = (data:BookType) => {
  newbook(data)
	console.log(data)
	    //	navigate(`/detail/${id}`)
	}

	return (
		// <div className="wrapper">
			<section className="review_container">
				<div className="input_box">
					<h2>書籍レビュー登録画面</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<p>title</p>
						<input  {...register("title", { required: true })}></input>
						<p>url</p>
						<input  {...register("url")}></input>
						<p>detail</p>
						<textarea {...register("detail")}></textarea>
						<p>review</p>
						<textarea {...register("review")}></textarea>
						<br />
						<button className="primary_btn" >登録</button>
						<button className="secondary_btn ">リセット</button>
					</form>
				</div>
				<Link to="/" >Home</Link>
			</section >
		// </div>

	)
}
export default New;
