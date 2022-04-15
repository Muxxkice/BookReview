import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		const newUser = data;
		console.log(newUser)
		axios
			.post(`${baseUrl}/users`, newUser)
			.then((res) => {
				console.log(res)
				navigate("/login")
			})
	};

	return (
		<>
			<h2>ユーザー登録</h2>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<p>名前</p>
					<input {...register("name")}
					/>
					<p>メールアドレス</p>
					<input {...register("email")} name="email"></input>
					<p>パスワード</p>
					<input {...register("password")} name="password"></input>
					<button>登録</button>
				</form>

			</div>
			<Link to="/login">ログイン</Link>
		</>
	)
}
export default Signup;
