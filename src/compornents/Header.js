import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom"

import { useAuth } from "./useAuth"

export const Header = () => {
	const { deleteToken, userName, IsAuthenticated } = useAuth()
	const location = useLocation();
	const navigate = useNavigate();
	const onClicklogout = () => {
		deleteToken()
		navigate("/login")
	}

	const backHome = () => {
		if (location.pathname !== "/") {
			console.log('backHome')
			(<Link to="/">トップに戻る</Link>)
		}
	}


	let isReact = true;

	if (isReact) {
		return (<header>
			<p>user:{userName}</p>
			<Link to="profile">プロフィール編集</Link>
			<Link to="/new">書籍レビュー登録</Link>
			<Link to="/mypage">マイページ</Link>
			<button onClick={onClicklogout}>ログアウト</button>
			{() => (<button>ボタン</button>)}
		</header>)
	} else {
		return (
			<header>
				<Link to="login">ログイン</Link>
				{() => ({ backHome })}
			</header>
		)
	}
}
export default Header;
