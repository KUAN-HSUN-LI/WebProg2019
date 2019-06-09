const Query = {
	users(parent, args, { db }, info) {
		if (args.query) {
			return db.users.filter(user => {
				return user.name.toLowerCase().includes(args.query.toLowerCase());
			});
		}
		if (args.orderBy) {
			return db.users.sort((a, b) => {
				return b.postCount > a.postCount;
			});
		}
		return db.users;
	},
	posts(parent, args, { db }, info) {
		if (!args.query) {
			return db.posts;
		}

		return db.posts.filter(post => {
			const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
			const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
			return isTitleMatch || isBodyMatch;
		});
	},
	comments(parent, args, { db }, info) {
		return db.comments;
	},
	me() {
		return {
			id: '123098',
			name: 'Mike',
			email: 'mike@example.com',
		};
	},
	post() {
		return {
			id: '092',
			title: 'GraphQL 101',
			body: '',
			published: false,
		};
	},
};

export { Query as default };
