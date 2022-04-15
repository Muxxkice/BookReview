import {
	Link
	, useNavigate
} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react"
import { useCookies } from "react-cookie";

import Home from "./Home";
import { useAuth } from "../compornents/useAuth"

const Login = () => {

	// const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	// const navigate = useNavigate()
	// const [userToken, setUserToken] = useState();
	// const [cookies, setCookie, removeCookie] = useCookies();

	const { register, handleSubmit } = useForm();
	const { onSubmitLogin, cookies } = useAuth();
	const onSubmit = (data) => {
		console.log(data)
		onSubmitLogin(data) };

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
				{/* <Home userToken={userToken} /> */}
			</div>
		</>

	)
}
export default Login;
