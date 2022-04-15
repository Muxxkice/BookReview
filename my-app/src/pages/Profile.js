import axios from "axios"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAuth } from "../compornents/useAuth"

const Profile = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const { cookies, userName } = useAuth()
	const { register, handleSubmit } = useForm()


	const changeName = (data) => {
		console.log(data)
		const article = { "name": data.name }
		const config = {
			headers: {
				Authorization: `Bearer ${cookies.userToken}`,
			}
		}
		console.log(config)
		axios.put(`${baseUrl}/users`, article, config)
			.then((res) => {
				console.log(res)
			})

	}
	return (
		<>
			<h1>ユーザー情報編集</h1>
			<p>現在の名前</p>
			<p>{userName}</p>
			<form onSubmit={handleSubmit(changeName)}>
				<p>新しい名前</p>
				<input placeholder={userName} {...register("name")}></input>
				<button>変更</button>
			</form>
			<Link to="/" >ホームへ戻る</Link>
		</>
	)
}
export default Profile;
