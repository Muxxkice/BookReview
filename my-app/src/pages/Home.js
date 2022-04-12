import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

import Booklog from "./Booklog";
import Profile from "./Profile";


const Home = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const [booklList, setBooklList] = useState([])
	const [userName, setUserName] = useState()
	
	const config = {
		headers: {
			Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk4MjA0MzUsImlhdCI6IjIwMjItMDQtMTJUMDM6Mjc6MTUuMTU5MTM3Njc0WiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjM0OTU5NjNiLTliZGMtNDU2Ny1hYmZkLTVkYzg3YzhjNGNjNiJ9._OZm66T6NGY2bFTXEJ0FS3n0TU_bwutjiXdA7MGy3Uo"
		}
	}
	const book = () => {
		console.log('onclick')
		axios
			.get(`${baseUrl}/public/books`)
			.then((res) => {
				// res.data.forEach((res) => console.log(Object.values(res)))
				setBooklList(res.data)
			}
			)
	}
	useEffect(() => {
		axios
			.get(`${baseUrl}/users`, config)
			.then((data) => setUserName(data.data.name))
	}, [])


	return (
		<>
			<h1>Home</h1>
			<p>こんにちは、{userName}さん</p>
			{/* <button>ユーザー名</button> */}
			<h1>BOOKlog</h1>

			<button onClick={book}>本の一覧を取得</button>

			<div className="booklog_container">
				<Booklog booklist={booklList} />
			</div>
			<Link to="profile">プロフィール編集</Link>
			<Link to="/login">ログイン</Link>
		</>
	)
}
export default Home;
