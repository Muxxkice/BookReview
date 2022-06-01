import React from "react";
import { useNavigate, Link } from "react-router-dom";


import Header from "../compornents/Header"
import { useAuth } from "../compornents/useAuth"
import useReview from "../compornents/useReview";

export const Mypage = () => {
	const { bookList } = useReview()
	const { onSubmitLogin, userName } = useAuth();
	const navigate = useNavigate();

	const personal_booklog_map = bookList.map((user) => {
		if (user.reviewer === userName) {
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

	return (
		<>
			<Header />
			<main>
				{
					bookList ? (<h3>投稿履歴</h3>)
						: (<h3>投稿履歴がありません</h3>
						)
				}
				{personal_booklog_map}
			</main>
		</>
	)

}
export default Mypage;
