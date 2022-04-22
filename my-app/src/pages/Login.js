import {
	Link
	, useNavigate
} from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../compornents/useAuth"

const Login = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const { onSubmitLogin, cookies } = useAuth();
	const onSubmit = (data) => {
		onSubmitLogin(data)
	};

// 	if (isAuthenticated) {
//     return <Route {...props}/>
//   }else{
//     console.log(`ログインしていないユーザーは${props.path}へはアクセスできません`)
//     return <Redirect to="/login"/>
//   }
// }
	return (
		<div className={"login" + "flex"}>
			<section className="top_container">
				<h2>ログインページ</h2>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<p>メールアドレス</p>
						<input {...register("email", { required: true })}
							placeholder="メールアドレス"></input>
						<span>必須</span>
						{errors.name && <span>必須項目です</span>}
						<p>パスワード</p>
						<input {...register("password", { required: true })} type="password"
							placeholder="パスワード"></input>
						<span>必須</span>
						{errors.name && <span>必須項目です</span>}
						<br />
						<button>ログイン</button>
					</form>
				</div>
				<Link to='/signup'>ユーザー登録</Link>
			</section>
		</div>

	)
}
export default Login;
