import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "./useAuth"
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

const Booklog = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const [booklList, setBooklList] = useState([]);
	const [personal_booklList, setPersonal_BooklList] = useState([]);
	const navigate = useNavigate();
	const { onSubmitLogin, cookies, deleteToken, userName } = useAuth();
	const [nextBook, setNextBook] = useState(20); //本の取得
	const { bookCount, setBookCount } = useState(0); //本の件数

	useEffect(() => {
		axios
			.get(`${baseUrl}/public/books`)
			.then((res) => {
				// console.log(res.data)
				setBooklList(res.data)
			})
		//publicと差がある理由がわからない
		const config = {
			headers: {
				Authorization: `Bearer ${cookies.userToken}`
			}
		}
		axios
			.get(`${baseUrl}/books`, config)
			.then((res) => {
				// console.log(res.data)
				setPersonal_BooklList(res.data)
			})
	}, [])

	const User_map = booklList.map((user) => {
		return (
			<div key={user.id} className="booklog_content">
				<dt>タイトル</dt>
				<a href={user.url}>{user.title}</a>
				<dt>詳細</dt>
				<dd className="line_wrap">{user.detail}</dd>
				<button
					onClick={() => {
						navigate(`/detail/${user.id}`)
					}}
				>詳細</button>
				<div className="user_review">
					<dt>レビュー</dt>
					<dd className="line_wrap">{user.review}</dd>
					<dt>レビュワー</dt>
					<dd>{user.reviewer}</dd>
					<LikeButton />
				</div>



			</div >
		)
	})

	const personal_booklog_map = booklList.map((user) => {
		if (user.reviewer == userName) {
			return (
				<div key={user.id} className="booklog_content">
					<dt>タイトル</dt>
					<a href={user.url}>{user.title}</a>
					<dt>詳細</dt>
					<dd className="line_wrap">{user.detail}</dd>
					<dt>レビュワー</dt>
					<dd>{user.reviewer}</dd>
					<dt>レビュー</dt>
					<dd >{user.review}</dd>
					<button
						onClick={() => {
							navigate(`/detail/${user.id}`)
						}}
					>詳細</button>
				</div >
			)
		}
	})

	const nextPage = () => {
		console.log(nextBook)
		axios
			.get(`${baseUrl}/books/public?offset=${nextBook}`)
			.then((res) => {
				console.log(res.data)
				// setBooklList(res.data)
				// 	setNextBook(nextBook + 10)

			})
	}

	return (
		<>
			{/* <button onClick={personal_booklog_map}>自分の履歴のみ表示</button> */}
			{User_map}
			{/* {personal_booklog_map} */}
			{/* <form><input></input></form> */}
			<button onClick={nextPage}>続きを見る</button>


		</>
	)
}
export default Booklog;


