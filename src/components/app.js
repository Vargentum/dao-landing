import { h, Component } from 'preact';
import { Router } from 'preact-router';
import firebase from 'firebase/app';
import 'firebase/database';

import Header from './header';
import Home from './home';
import Profile from './profile';

const FIREBASE_CONFIG = {
	apiKey: 'AIzaSyBcfEg5fw0pu1_F0yLwG0g14b4IElz7zhE',
	authDomain: 'wedao-mvp-7fcb7.firebaseapp.com',
	databaseURL: 'https://wedao-mvp-7fcb7.firebaseio.com',
	projectId: 'wedao-mvp-7fcb7',
	storageBucket: 'wedao-mvp-7fcb7.appspot.com',
	messagingSenderId: '555465437086'
};

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount () {
		if (!firebase.apps.length) {
			firebase.initializeApp(FIREBASE_CONFIG);
		}
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
