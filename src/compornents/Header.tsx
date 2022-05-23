import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

import { useAuth } from "./useAuth"

export const Header = () => {
	const { deleteToken, userName, IsAuth } = useAuth()
	const location = useLocation();
	const navigate = useNavigate();
	const [pathname, setPathname] = useState<boolean>(true)

	const onClicklogout = () => {
		deleteToken()
		navigate("/login")
	}

	useEffect(() => {
		if (location.pathname == "/") {
			setPathname(false)
		}
	}, [])

	if (IsAuth) {
		return (<header>
			<p>user:{userName}</p>
			<nav className="header_nav">
				<ul>
					<li><Link to="/profile">プロフィール編集</Link></li>
					<li><Link to="/new">書籍レビュー登録</Link></li>
					<li><Link to="/mypage">マイページ</Link></li>
					{pathname && <button className="primary_btn"><Link to="/">トップに戻る</Link></button>}
					<button className="secondary_btn" onClick={onClicklogout}>ログアウト</button>
				</ul>
			</nav>
		</header>)
	} else {
		return (
			<header>
				<nav className="header_nav">
					<ul>
						<li><Link to="/login">ログイン</Link></li>
						{pathname && <button className="primary_btn"><Link to="/">トップに戻る</Link></button>}
						<button><Link to="/signup">新規登録</Link></button>
					</ul>
				</nav>
			</header>
		)
	}
}
export default Header;
