import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react"

import { useAuth } from "../compornents/useAuth"
import { useReview } from "../compornents/useReview"

export const Edit = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate()
	const { id } = useParams();
	const { cookies } = useAuth();
	const { review } = useReview();
	const [newReview, setNewReview] = useState([]);
	console.log(review);
	const onSubmit = (data) => {
		console.log(data);
		setNewReview(data)
	};
	const article = {
		"title": newReview.title,
		"url": newReview.url,
		"detail": newReview.detail,
		"review": newReview.review
	}

	const config = {
		headers: {
			Authorization: `Bearer ${cookies.userToken}`
		}
	}
	const editReview = () => {
		console.log(article)
		console.log(`${baseUrl}/books/${id}`)
		axios
			.put(`${baseUrl}/books/${id}`, article, config)
			.then((res) => {
				console.log(res)
				navigate(`/detail/${id}`)
			})
			.catch(e => console.log(e))
	}
	const deleteReview = () => {
		console.log('削除')
		axios
			.delete(`${baseUrl}/books/${id}`, config)
			.then((data) => {
				console.log(data)
				navigate("/")
			})
			.catch(e => console.log(e))
	}

	return (
		<div className="wrapper">
			<h1>書籍レビューの編集画面</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>タイトル</p>
				{/* <p>{review[0].title}</p> */}
				<input {...register("title")}></input>
				<p>url</p>
				{/* <p>{review[0].url}</p> */}
				<input{...register("url")}></input>
				<p>詳細</p>
				{/* <p>{review[0].detail}</p> */}
				<input{...register("detail")}></input>
				<p>レビュー</p>
				<input{...register("review")}></input>
				<br />
				<button onClick={deleteReview}>削除</button>
				<button onClick={editReview}>編集</button>
			</form>
			<p>idは{id}</p>
			<Link to={`/detail/${id}`}>戻る</Link>
		</div>
	)

}
export default Edit
