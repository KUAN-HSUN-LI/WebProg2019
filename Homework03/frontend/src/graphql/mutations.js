import { gql } from 'apollo-boost';

export const CREATE_POST_MUTATION = gql`
	mutation createPost($title: String!, $body: String!, $published: Boolean!, $authorId: ID!, $date: String) {
		createPost(data: { title: $title, body: $body, published: $published, author: $authorId, date: $date }) {
			title
			body
			author {
				name
			}
			published
			date
		}
	}
`;
