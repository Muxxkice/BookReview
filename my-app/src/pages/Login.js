import {
	Link
	, useNavigate
} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react"

import Home from "./Home";

const Login = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm();
	const [userToken, setUserToken] = useState();

	const onSubmit = (data) => {
		const user = data;
		// console.log(user)
		axios
			.post(`${baseUrl}/signin`, user)
			.then((res) => {
				console.log(res.data.token)
				setUserToken(res.data.token)
				// alert('ログインに成功しました')
				navigate("/")
			})
	}

	return (
		<>
			<div>
				<h2>ログインページ</h2>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<p>メールアドレス</p>
						<input {...register("email")}
							placeholder="メールアドレス"></input>
						<p>パスワード</p>
						<input {...register("password")} name="password"
							placeholder="パスワード"></input>
						<button>ログイン</button>
					</form>
				</div>
				<Link to='/signup'>ユーザー登録</Link>
				<Home userToken={userToken} />
			</div>
		</>

	)
}
export default Login;
