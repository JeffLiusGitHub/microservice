import React, { useState } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
const CommentCreate = ({ postId }) => {
	const [content, setContent] = useState('');
	const inputChangeHandler = (event) => {
		setContent(event.target.value);
	};

	const createComment = async () => {
		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			//todo
			content,
		});
		setContent('');
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		createComment();
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>New Comment</label>
					<input
						value={content}
						onChange={inputChangeHandler}
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
			{/* <CommentList postId={postId} /> */}
		</div>
	);
};

export default CommentCreate;
