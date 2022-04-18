import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "./useAuth"

const Booklog = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const [booklList, setBooklList] = useState([]);
	const navigate = useNavigate();


	useEffect(() => {

		axios
			.get(`${baseUrl}/public/books`)
			.then((res) => {
				console.log(res.data)
				setBooklList(res.data)
			})
	}, [])
	console.log(booklList)

	const User_map = booklList.map((user) => {
		return (
			<div key={user.id} className="booklog_content">
				<dt>タイトル</dt>
				<a href={user.url}>{user.title}</a>
				<dt>詳細</dt>
				<dd>{user.detail}</dd>
				<dt>レビュワー</dt>
				<dd>{user.reviewer}</dd>
				<dt>レビュー</dt>
				<dd>{user.review}</dd>
				<button
					onClick={() => {
						navigate(`/detail/${user.id}`)
					}}
				>詳細</button>
			</div >
		)
	})

	return (
		<>
			{User_map}
		</>
	)
}
export default Booklog;
