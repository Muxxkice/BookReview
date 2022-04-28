import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "./useAuth"
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import useReview from "./useReview";

const Booklog = () => {
	const { bookList, setBookList } = useReview()
	const navigate = useNavigate();
	const { IsAuth } = useAuth();
	const [nextBook, setNextBook] = useState(10); //本の取得

	const User_map = bookList.map((user) => {
		return (
			<div key={user.id} className="booklog_content">
				<dt>タイトル</dt>
				<a href={user.url}>{user.title}</a>
				<dt>詳細</dt>
				<dd className="line_wrap">{user.detail}</dd>
				<button className="secondary_btn"
					onClick={() => {
						navigate(`/detail/${user.id}`)
					}}
				>詳細</button>
				<div className="user_review">
					<dt>レビュー</dt>
					<dd className="line_wrap">{user.review}</dd>
					<dt>レビュワー</dt>
					<dd>{user.reviewer}</dd>
					{IsAuth &&	<LikeButton />}
				</div>
			</div >
		)
	})

	const nextPage = () => {
		console.log(nextBook)
		axios
			.get(`/public/books?offset=${nextBook}`)
			.then((res) => {
				const books = Object.assign({}, bookList)
				const newbooks = res.data
				setNextBook(nextBook + 10)
				setBookList(newbooks)
				console.log(nextBook)
			})
			.catch((e) => console.log(e))
	}
	const backPage = () => {
		if (nextBook >= 0) {
			const count = nextBook
			setNextBook(count - 10)
			console.log(nextBook)
			axios
				.get(`/public/books?offset=${nextBook}`)
				.then((res) => {
					const books = Object.assign({}, bookList)
					const newbooks = res.data
					setBookList(newbooks)
				})
				.catch((e) => console.log(e))
		}

	}
	return (
		<>
			{User_map}
			{/* {personal_booklog_map} */}
			{/* <form><input></input></form> */}
			<button onClick={backPage}>前</button>
			<button onClick={nextPage}>次</button>
			{/* <button onClick={backPage}>前に戻る</button> */}


		</>
	)
}
export default Booklog;


