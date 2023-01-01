import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CommentList = ({ postId }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			const res = await axios.get(
				`http://localhost:4001/posts/${postId}/comments`
			);

			setComments(res.data);
		};
		fetchComments();
	}, [postId]);

	console.log(comments);

	const rendercommentListElement = comments?.map((comment) => (
		<li key={comment.id}>{comment.content}</li>
	));

	return <ul>{rendercommentListElement}</ul>;
};

export default CommentList;
