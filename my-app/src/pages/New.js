import { useForm } from "react-hook-form";
export const New = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = async data => { console.log(data); };
	// {
	// 	"title": "string",
	// 	"url": "string",
	// 	"detail": "string",
	// 	"review": "string"
	// }
	return (
		<>
			<h1>書籍レビュー登録画面</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input></input>
				<input></input>
				<input></input>
				<input></input>
			</form>
		</>
	)
}
export default New;
