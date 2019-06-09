import { gql } from 'apollo-boost';

export const POSTS_SUBSCRIPTION = gql`
	subscription($author: ID) {
		post(author: $author) {
			mutation
			data {
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
