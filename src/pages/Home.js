import { Link } from 'react-router-dom';

import Booklog from "../compornents/Booklog";
import Header from "../compornents/Header";
import Footer from "../compornents/Footer";
import { useAuth } from "../compornents/useAuth"

const Home = () => {
	const { userName } = useAuth();

	return (
		<>
			<Header />
			<main>
				<div className='main_container'> </div>
				<h2>新着一覧</h2>
				<Booklog />
				<Link to="/login">ログイン</Link>
			</main>
			<Footer />

		</>
	)
}
export default Home;
