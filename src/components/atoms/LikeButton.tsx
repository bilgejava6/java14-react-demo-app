import {useState} from "react";

function LikeButton() {
    const [isLike,setIsLike] = useState(false);
    const likeAction = ()=>{
        setIsLike(!isLike);
    }
	return (
		<>
			{isLike ? (
				<a onClick={likeAction} className="btn btn-success me-1">
					<i className="fa-regular fa-heart "></i>
				</a>
			) : (
				<a onClick={likeAction} className="btn btn-outline-primary me-1">
					<i className="fa-regular fa-heart "></i>
				</a>
			)}
		</>
	);
}

export default LikeButton;
