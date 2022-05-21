import { Link } from "react-router-dom";

import Booklog from "../compornents/Booklog";
import Header from "../compornents/Header";
import Footer from "../compornents/Footer";
import useBookReview from "../compornents/useBookReview";
import { Reviewlog } from "../compornents/Reviewlog";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main_container"> </div>
        <h2>新着一覧</h2>
        <Booklog />
        <Link to="/login">ログイン</Link>
				<Reviewlog />
      </main>
      <Footer />
    </>
  );
};
export default Home;
