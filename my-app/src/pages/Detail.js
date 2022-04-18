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
		return (
			<div key={user.id}>
				<dl>
					<dt>タイトル</dt>
					<dd><a href={user.url}>{user.title}</a></dd>
					<dt>説明</dt>
					<dd>{user.detail}</dd>
					<dt>レビュー</dt>
					<dd>{user.review}</dd>
					<dt>url</dt>
					<dd>{user.url}</dd>
					<dt>レビュワー</dt>
					<dd>{user.reviewer}</dd>
				</dl>
			</div>
		)
	}
	)

	return (
		<>
			<h1>書籍レビューの詳細</h1>
			<p>idは{id}</p>
			{review_map}
			<button onClick={() => { navigate(`/edit/${id}`) }} s>編集</button>
			<Link to="/">戻る</Link>
		</>
	)
}
export default Detail;
