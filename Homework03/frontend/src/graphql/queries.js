import { gql } from 'apollo-boost';

export const POSTS_QUERY = gql`
	query {
		posts {
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

export const USERS_QUERY = gql`
	query {
		users(orderBy: postCount_ASC) {
			name
			postCount
			id
			posts {
				title
				body
				author {
					name
				}
				published
				date
			}
		}
	}
`;
