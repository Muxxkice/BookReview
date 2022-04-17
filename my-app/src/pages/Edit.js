import axios from "axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
export const Edit = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const { id } = useParams();
	return (
		<>
			<h1>書籍レビューの編集画面</h1>
			<p>idは{id}</p>
			<button>削除</button>
			<Link to="/">戻る</Link>
		</>
	)

}
export default Edit
