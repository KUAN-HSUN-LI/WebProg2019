import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';

import { USERS_QUERY, CREATE_POST_MUTATION } from '../../graphql';
import User from '../../components/User/User';
import classes from './App.module.css';

const options = [{ value: '1', label: 'Andrew' }, { value: '2', label: 'Sarah' }, { value: '3', label: 'Mike' }];
class App extends Component {
	state = {
		formName: '',
		formTitle: '',
		formBody: '',
	};

	handleFormSubmit = e => {
		e.preventDefault();

		const { formTitle, formBody, formName } = this.state;

		if (!formTitle || !formBody || !formName) return;
		this.createPost({
			variables: {
				title: formTitle,
				body: formBody,
				published: true,
				authorId: formName,
				date:
					new Date().getUTCFullYear() +
					'-' +
					new Date().getMonth() +
					'-' +
					new Date().getDate() +
					'-' +
					new Date().getHours() +
					':' +
					new Date().getMinutes(),
			},
		});

		this.setState({
			formTitle: '',
			formBody: '',
		});
	};

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h1 className={classes.title}>Modern GraphQL Tutorial</h1>
					</Col>
				</Row>
				<Row>
					<Col xs="6" className={classes.form}>
						<Mutation mutation={CREATE_POST_MUTATION}>
							{createPost => {
								this.createPost = createPost;

								return (
									<Form onSubmit={this.handleFormSubmit}>
										<FormGroup row>
											<Label sm={2}>Name</Label>
											<Col sm={10}>
												<Select
													options={options}
													placeholder={'select authors'}
													onChange={e => this.setState({ formName: e.value })}
												/>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Label for="title" sm={2}>
												Title
											</Label>
											<Col sm={10}>
												<Input
													name="title"
													value={this.state.formTitle}
													id="title"
													placeholder="Post title..."
													onChange={e => this.setState({ formTitle: e.target.value })}
												/>
											</Col>
										</FormGroup>
										<FormGroup>
											<Label for="body">Body</Label>
											<Input
												type="textarea"
												name="body"
												value={this.state.formBody}
												id="body"
												placeholder="Post body..."
												onChange={e => this.setState({ formBody: e.target.value })}
											/>
										</FormGroup>
										<Button type="submit" color="primary">
											Post!
										</Button>
									</Form>
								);
							}}
						</Mutation>
					</Col>
					<Col xs="6" className={classes.container}>
						<Query query={USERS_QUERY}>
							{({ loading, error, data }) => {
								if (loading) return <p>Loading...</p>;
								if (error) return <p>Error :(((</p>;
								var users = data.users.map((post, id) => <User data={post} key={id} />);
								return <div>{users}</div>;
							}}
						</Query>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
