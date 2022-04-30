import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { useAuth } from "../compornents/useAuth"
import { useReview } from "../compornents/useReview"

export const Detail = () => {
	const { id } = useParams();
	const { review } = useReview();
	const navigate = useNavigate();

	const review_map = review.map((user) => {
		console.log(user.isMine)
		return (
			<div key={user.id}>
				<dl>
					<dt>タイトル</dt>
					<dd><a href={user.url}>{user.title}</a></dd>
					<dt>説明</dt>
					<dd>{user.detail}</dd>
					<dt>レビュー</dt>
					<dd>{user.review}</dd>
					<dt>レビュワー</dt>
					<dd>{user.reviewer}</dd>
				</dl>
				{ user.isMine && (<button onClick={() => { navigate(`/edit/${id}`) }}>編集</button>)}
			</div >

		)
	})


	return (
		<div className="wrapper">
			<h1>書籍レビューの詳細</h1>
			<div className="review_container">
				{review_map}
			</div>
			{/* <button onClick={() => { navigate(`/edit/${id}`) }}>編集</button> */}
			<Link to="/">トップ</Link>
			<Link to="/mypage">マイページ</Link>
		</div>
	)
}
export default Detail;
