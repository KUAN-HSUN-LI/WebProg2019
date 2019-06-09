import React from 'react';

import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap';

const Post = ({
	data: {
		title,
		body,
		author: { name },
		published,
	},
	display,
}) => {
	return (
		<div style={{ display: display }}>
			<Card style={{ margin: '2.5% auto', width: '95%' }}>
				<CardHeader>{title}</CardHeader>
				<CardBody>{`${body}` || <p style={{ opacity: 0.5 }}>No body for this post...</p>}</CardBody>
				<CardFooter>{`${name} - published: ${published}`}</CardFooter>
			</Card>
		</div>
	);
};

export default Post;
