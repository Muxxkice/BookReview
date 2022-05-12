import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "./useAuth"
import LikeButton from "./LikeButton";
import useReview from "./useReview";

const Booklog = () => {
	const { bookList, setBookList } = useReview()
	const navigate = useNavigate();
	const { IsAuth } = useAuth();
	const [bookCount, setBookCount] = useState(10); //本の取得

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
		axios
			.get(`/public/books?offset=${bookCount}`)
			.then((res) => {
				// const books = Object.assign({}, bookList)
				const newbooks = res.data
				setBookCount(bookCount + 10)
				setBookList(newbooks)
				console.log(bookCount)
			})
			.catch((e) => console.log(e))
	}
	
	const backPage = () => {
		if (bookCount>= 0) {
			const count = bookCount;
			setBookCount(count - 10);
			console.log(bookCount);
			axios
				.get(`/public/books?offset=${bookCount}`)
				.then((res) => {
					// const books = Object.assign({}, bookList)
					const newbooks = res.data
					setBookList(newbooks)
				})
				.catch((e) => console.log(e))
		}

	}
	return (
		<>
			{User_map}
			<button onClick={backPage}>前</button>
			<button onClick={nextPage}>次</button>
		</>
	)
}
export default Booklog;


