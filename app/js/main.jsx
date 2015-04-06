import React from 'react';
import Reflux from 'reflux';

import GreetingActions from './actions/greeting';
import GreetingStore from './stores/greeting';

export default React.createClass({

	mixins: [Reflux.listenTo(GreetingStore, 'onGreetingChanged')],

	getInitialState: function() {
		return {
			greeting: GreetingStore.greeting,
		};
	},
	onGreetingChanged: function() {
		console.log('hello');
		this.setState({greeting: GreetingStore.greeting});
	},
	onButtonClicked: function() {
		GreetingActions.goodbye();
	},
	render: function() {
		return <div>
			<h1>{this.state.greeting}</h1>
			<button onClick={this.onButtonClicked}>Good bye!</button>
		</div>
	},
});
