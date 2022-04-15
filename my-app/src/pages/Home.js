import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

import Booklog from "./Booklog";
import Header from "../compornents/Header"
import { useAuth } from "../compornents/useAuth"

const Home = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const [booklList, setBooklList] = useState([])
	const [userName, setUserName] = useState()
	const { cookies } = useAuth();


	const config = {
		headers: {
			Authorization: `Bearer ${cookies.userToken}`
		}
	}

	const book = () => {
		axios
			.get(`${baseUrl}/public/books`)
			.then((res) => {
				// res.data.forEach((res) => console.log(Object.values(res)))
				setBooklList(res.data)
			}
			)
	}
	// useEffect(() => {
		axios
			.get(`${baseUrl}/users`, config)
			.then((data) => setUserName(data.data.name))
	// }, [])



	return (
		<>
			<Header />
			<h1>Home</h1>
			<p>こんにちは、{userName}さん</p>
			{/* <button>ユーザー名</button> */}
			<h1>BOOKlog</h1>

			<button onClick={book}>本の一覧を取得</button>

			<div className="booklog_container">
				<Booklog booklist={booklList} />
			</div>
			<Link to="/login">ログイン</Link>

		</>
	)
}
export default Home;
