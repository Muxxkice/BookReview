import { Link
	,useNavigate
} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		const user = data;
		console.log(user)
		axios
			.post(`${baseUrl}/signin`, user)
			.then((res) => {
				console.log(res)
				// navigate("/home")
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
							// ref={register}
							placeholder="パスワード"></input>
						<button>ログイン</button>
					</form>
				</div>
				<Link to='/signup'>ユーザー登録</Link>
			</div>
		</>
	)
}
export default Login;
