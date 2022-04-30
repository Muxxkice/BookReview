import axios from "axios";
import { useForm } from "react-hook-form";
import {
	Link, useNavigate
} from "react-router-dom";
import { useParams } from "react-router-dom"


import useAuth from "../compornents/useAuth"

export const New = () => {
	const { register, handleSubmit, errors } = useForm();
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const { cookies, userName } = useAuth()
	const navigate = useNavigate();
	const { id } = useParams();

	const onSubmit = (data) => {
		console.log(data)
		console.log(cookies.userToken)
		const config = {
			headers: {
				Authorization: `Bearer ${cookies.userToken}`
			}
		}
		axios
			.post(`${baseUrl}/books`, data, config)
			.then((res) => {
				console.log(res)
				navigate(`/detail/${id}`)
			})
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
