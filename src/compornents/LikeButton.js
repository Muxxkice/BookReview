import { useState } from "react"

export const LikeButton = () => {
	const [liked, setLiked] = useState(false)

	const onClickLiked = () => {
		console.log('like')
		setLiked(!liked)
	}
	return (
		<button onClick={onClickLiked}>
			{liked ? "いいね済み" : "いいね前"}
		</button>
	)
}

export default LikeButton
