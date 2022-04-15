import axios from "axios"
import { Link } from "react-router-dom"

const Profile = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk4MjA0MzUsImlhdCI6IjIwMjItMDQtMTJUMDM6Mjc6MTUuMTU5MTM3Njc0WiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjM0OTU5NjNiLTliZGMtNDU2Ny1hYmZkLTVkYzg3YzhjNGNjNiJ9._OZm66T6NGY2bFTXEJ0FS3n0TU_bwutjiXdA7MGy3Uo"

	const config = {
		headers: {
			Authorization: `Bearer ${userToken}`
		}
	}
	const changeName = () => {
		axios.put(baseUrl, config)
			.then((data) => console.log(data))
	}
	return (
		<>
			<h1>ユーザー情報編集</h1>
			<p>新名前</p>
			<input></input>
			<button onClick={changeName}>変更</button>
			<Link to="/" >ホームへ戻る</Link>
		</>
	)
}
export default Profile;
