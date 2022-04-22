import { Link } from 'react-router-dom';

const Top = () => {
	return (
		<>
			<h1>ブックレビューアプリ</h1>
			<Link to='/signup'>新規作成</Link>
			<p>既にアカウントをお持ちの方</p>
			<Link to='/login'>ログイン</Link>
		</>
	)
}
export default Top;
