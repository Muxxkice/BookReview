import { Link } from 'react-router-dom';

import Booklog from "../compornents/Booklog";
import Header from "../compornents/Header"
import { useAuth } from "../compornents/useAuth"

const Home = () => {
	const { userName } = useAuth();

	return (
		<>
			<Header />
			<main>
				<p>こんにちは、{userName}さん</p>
					<h2>新着一覧</h2>
					<Booklog />
				<Link to="/login">ログイン</Link>
			</main>

		</>
	)
}
export default Home;
