import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const navigate = useNavigate()
	const { register, formState: { errors }, handleSubmit } = useForm()

	const onSubmit = (data) => {
		const newUser = data;
		console.log(newUser)
		axios
			.post(`${baseUrl}/users`, newUser)
			.then((res) => {
				console.log(res)
				navigate("/login")
			})
			.catch(() => alert('ログインできませんでした'))
	};

	return (
		<div className="login">
			<section className="top_container">
				<h2>ユーザー登録</h2>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<p>名前</p>
						<input {...register("name", { required: true })}
						/>
						<span>必須</span>
						{errors.name && <span>必須項目です</span>}
						<p>メールアドレス</p>
						<input {...register("email", { required: true })} />
						<span>必須</span>
						{errors.email && <span>必須項目です</span>}
						<p>パスワード</p>
						<input {...register("password", { required: true })}></input>
						<span>必須</span>
						{errors.password && <span>必須項目です</span>}
						<br />
						<button>登録</button>
					</form>
				</div>
				<p>既に登録済みの場合</p>
				<Link to="/login">ログイン</Link>
			</section>
		</div>
	)
}
export default Signup;
