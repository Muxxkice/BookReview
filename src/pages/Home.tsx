import React from "react";
import { Link } from "react-router-dom";

import Booklog from "../compornents/Booklog";
import Header from "../compornents/Header";
import Footer from "../compornents/Footer";
// import { Reviewlog } from "../compornents/Reviewlog";
import { useReview } from "../compornents/useReview";

const Home = () => {
  const { isEnd, fetchMore, bookList, data } = useReview();
  return (
    <>
      <Header />
      <main>
        <div className="main_container"> </div>
        <h2>新着一覧</h2>
        <Booklog bookList={bookList} />
        <Booklog bookList={data} />
        {!isEnd && <button onClick={fetchMore}>もっと見る</button>}
        <Link to="/login">ログイン</Link>
      </main>
      <Footer />
    </>
  );
};
export default Home;
