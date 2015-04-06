import Reflux from 'reflux';

import actions from '../actions/greeting';

export default Reflux.createStore({

	greeting: 'Hello, world!',

	init: function() {
		this.listenToMany(actions);
	},

	hello: function() {
		this.greeting = 'Hello, world!';
		this.trigger();
	},

	goodbye: function() {
		this.greeting = 'Goodbye, world!';
		this.trigger();
	},
});

