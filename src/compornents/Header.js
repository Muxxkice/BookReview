import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom"
import { useState ,useEffect} from "react";

import { useAuth } from "./useAuth"

export const Header = () => {
	const { deleteToken, userName, IsAuth } = useAuth()
	const location = useLocation();
	const navigate = useNavigate();
	const [pathname, setPathname] = useState(true)

	const onClicklogout = () => {
		deleteToken()
		navigate("/login")
	}


useEffect (() => {
	if (location.pathname == "/") {
		setPathname(false)
	}
},[])

	// const backHome = () => {
	// 	console.log(location.pathname)
	// 	if (location.pathname == "/") {
	// 		console.log('backHome')
	// 		return (<Link to="/">トップに戻る</Link>)
	// 	}
	// }

	if (IsAuth) {
		return (<header>
			<p>user:{userName}</p>
			<Link to="profile">プロフィール編集</Link>
			<Link to="/new">書籍レビュー登録</Link>
			<Link to="/mypage">マイページ</Link>
			<button onClick={onClicklogout}>ログアウト</button>
			{pathname && <Link to="/">トップに戻る</Link>}

		</header>)
	} else {
		return (
			<header>
				<Link to="login">ログイン</Link>

			</header>
		)
	}
}
export default Header;
