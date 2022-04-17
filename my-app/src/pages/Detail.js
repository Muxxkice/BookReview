import axios from "axios";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { useAuth } from "../compornents/useAuth"

export const Detail = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const { id } = useParams();
	const { cookies } = useAuth();
	const [review, setReview] = useState([]);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${cookies.userToken}`
			}
		}
		axios
			.get(`${baseUrl}/books/${id}`, config)
			.then((res) => {
				console.log(Array(res.data))
				setReview(Array(res.data))
			})
	}, [])

	const review_map = review.map((user) => {
		return (
			<div key={user.id}>
				<dl>
					<dt>タイトル</dt>
					<dd>{user.title}</dd>
					<dt>説明</dt>
					<dd>{user.detail}</dd>
					<dt>レビュー</dt>
					<dd>{user.review}</dd>
					<dt>url</dt>
					<dd>{user.url}</dd>
				</dl>
				{/* <button
					onClick={() => {
						navigate(`/detail/${user.id}`)
					}}
				>詳細</button> */}
			</div>
		)
	}
	)
	console.log(review_map)
	return (
		<>
			<h1>書籍レビューの詳細</h1>
			<p>idは{id}</p>
			{review_map}
			<button>編集</button>
			<Link to="/">戻る</Link>
		</>
	)
}
export default Detail;
