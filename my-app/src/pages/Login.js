import {
	Link
	, useNavigate
} from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../compornents/useAuth"

const Login = () => {
	const { register, handleSubmit } = useForm();
	const { onSubmitLogin, cookies } = useAuth();
	const onSubmit = (data) => {
		onSubmitLogin(data)
	};

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
			</div>
		</>

	)
}
export default Login;
