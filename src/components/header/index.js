import { h, Component } from 'preact';
// import { Link } from 'preact-router';
import style from './style.styl';

export default class Header extends Component {
	render() {
		return (
			<header>
				<h1 class={style.h1}>WeDAO</h1>
			</header>
		);
	}
}
