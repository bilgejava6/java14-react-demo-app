import React, { useState } from "react";

function CommentButton() {
	const [isClick, setIsClick] = useState(false);
    const commentAction = ()=>{
        setIsClick(!isClick);
    }
	if (isClick)
		return (
			<a onClick={commentAction} className="btn btn-success me-1">
				<i className="fa-regular fa-comment"></i>
			</a>
		);
	else
		return (
			<a onClick={commentAction} className="btn btn-outline-primary me-1">
				<i className="fa-regular fa-comment"></i>
			</a>
		);
}

export default CommentButton;
