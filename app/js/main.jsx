import React from 'react';
import AppDispatcher from './dispatcher';

export default class Main extends React.Component {

	constructor() {
		super();

		// ES6 binding workaround
		this.onButtonClicked = this.onButtonClicked.bind(this);

		// State
		this.state = {
			greeting: 'Hello, world',
		};
	}

	onButtonClicked() {
		this.setState({greeting: 'Goodbye, world!'});
	}

  render() {
		return (
			<div>
				<h1>{this.state.greeting}</h1>
				<button onClick={this.onButtonClicked}>Good bye!</button>
			</div>
    );
  }
}
