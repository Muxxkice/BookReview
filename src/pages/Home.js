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
				<div className="booklog_container">
					<Booklog />
				</div>
				<Link to="/login">ログイン</Link>
			</main>

		</>
	)
}
export default Home;
