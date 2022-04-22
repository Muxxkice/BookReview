import { Link } from "react-router-dom"

import { useAuth } from "./useAuth"
export const Header = () => {
	const { deleteToken, userName, IsAuthenticated } = useAuth()
	const onClicklogout = () => deleteToken()


		return (
			<>
				<header>
					<p>user:{userName}</p>
					<Link to="profile">プロフィール編集</Link>
					<br />
					<Link to="/new">書籍レビュー登録</Link>
					<br />
					<button onClick={onClicklogout}>ログアウト</button>
				</header>
			</>

		)


}
export default Header;
