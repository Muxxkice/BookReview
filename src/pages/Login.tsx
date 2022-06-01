import React from "react";
import {
	Link
} from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../compornents/useAuth"
import { UserType } from "../types/type";


const Login = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const { onSubmitLogin } = useAuth();

	const onSubmit = (data:UserType) => {
		onSubmitLogin(data)
	};

	return (
		<div className="flex">
			<section className="top_container">
				<div className="input_box">
					<h2>ログインページ</h2>
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
						<button className="primary_btn">ログイン</button>
					</form>
					<div className="non">
						<p>まだ登録を行なっていない方</p>
						<button className='secondary_btn'><Link to='/signup'>ユーザー登録</Link></button>
					</div>
				</div>
			</section>
		</div>

	)
}
export default Login;
