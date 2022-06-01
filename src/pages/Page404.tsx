import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<>
			<h1>NotFound</h1>
			<p>お探しのページは見つかりません</p>
			<Link to="/">戻る</Link>
		</>
	)
}
export default Page404;
