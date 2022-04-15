import { useState, useEffect } from "react"
import axios from "axios";

const Booklog = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const [booklList, setBooklList] = useState([])

	useEffect(() => {
		axios
			.get(`${baseUrl}/public/books`)
			.then((res) => {
				setBooklList(res.data)
			}
			)
	}, [])

	const User_map = booklList.map((user) => {
		return (
			<div key={user.id} className="booklog_content">
				<a href={user.url}>{user.title}</a>
				<dt>{user.detail}</dt>
				<dt>{user.reviewer}</dt>
			</div>)
	})

	return (
		<>
			{User_map}
		</>
	)
}
export default Booklog;
