import React, { useState } from 'react';
import Post from '../Post/Post';
import classes from './User.module.css';
import { Query } from 'react-apollo';
import { POSTS_QUERY, POSTS_SUBSCRIPTION } from '../../graphql';

const Author = ({ data: { name, id } }) => {
	const [display, setDisplay] = useState('none');
	const [unscribe, setUnscribe] = useState(false);
	return (
		<>
			<Query query={POSTS_QUERY}>
				{({ loading, error, data, subscribeToMore }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(((</p>;

					var posts = data.posts.filter(e => {
						if (e.author.name === name) {
							return e;
						}
						return null;
					});
					if (!unscribe) {
						setUnscribe(true);
						subscribeToMore({
							document: POSTS_SUBSCRIPTION,
							variables: {
								author: id,
							},
							updateQuery: (prev, { subscriptionData }) => {
								if (!subscriptionData.data) return prev;
								const newPost = subscriptionData.data.post.data;
								return {
									...prev,
									posts: [newPost, ...prev.posts],
								};
							},
						});
					}

					return (
						<div>
							<div
								className={classes.main}
								onClick={() => {
									display === 'none' ? setDisplay('inline') : setDisplay('none');
								}}>
								<div className={classes.author_post_num}>
									<p>{posts.length}</p>
								</div>
								<h1 className={classes.name}>{name}</h1>
							</div>
							{posts.map((post, idx) => (
								<Post data={post} key={idx} display={display} />
							))}
						</div>
					);
				}}
			</Query>
		</>
	);
};

export default Author;
