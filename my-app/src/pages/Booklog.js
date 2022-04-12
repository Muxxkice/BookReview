
const Booklog = (props) => {
	const booklist = props.booklist
	console.log(booklist)

	const User_map = booklist.map((user) => {
		return (
			<div key={user.id} className="booklog_content">
				<a href={user.url}>{user.title}</a>
				<dt>{user.detail}</dt>
				<dt>{user.reviewer}</dt>
			</div>)
	})
	console.log(User_map)

	return (
		<>
			{User_map}
		</>
	)
}
export default Booklog;
