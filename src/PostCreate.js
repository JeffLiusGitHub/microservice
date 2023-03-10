import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
	const [title, setTitle] = useState('');
	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		await axios.post('http://localhost:4000/posts', {
			title,
		});
		setTitle('');
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Title</label>
					<input
						value={title}
						onChange={titleChangeHandler}
						className="form-control"
					/>{' '}
				</div>
				<button className="bt btn-primary">Submit</button>
			</form>{' '}
		</div>
	);
};

export default PostCreate;
