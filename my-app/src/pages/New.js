import axios from "axios";
import { useForm } from "react-hook-form";
import {
	Link
} from "react-router-dom";

import useAuth from "../compornents/useAuth"

export const New = () => {
	const { register, handleSubmit, errors } = useForm();
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const { cookies, userName } = useAuth()


	const onSubmit = (data) => {
		console.log(data)
		// const article = { "name": data.name }
		const config = {
			headers: {
				Authorization: `Bearer ${cookies.userToken}`,
			}
		}
		console.log(config)
			.post(`${baseUrl}/books`, data, config)
	}

	return (
		<>
			<h1>書籍レビュー登録画面</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>title</p>
				<input  {...register("title", { required: true })}></input>
				<p>url</p>
				<input  {...register("url")}></input>
				<p>detail</p>
				<input name="detail"{...register("detail")}></input>
				<p>review</p>
				<input name="review"{...register("review")}></input>
				<button>登録</button>
				<button>リセット</button>
			</form>
			<Link to="/" >Home</Link>
		</>
	)
}
export default New;
