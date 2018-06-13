import { h } from 'preact';
import {mapRender} from '../utils';
import {SubscriptionForm} from '../forms';
import style from './style.styl';

const FEATURES = [
	{icon: '', text: 'You invest is secured by tickets at bulk price'},
	{icon: '', text: 'We sell tickets on your behalf at retail price'},
	{icon: '', text: 'Choose the sale strategy', tip: '(to minimize your risk, or maximize profits)'}
];

function ListItem ({icon, text, tip}) {
	return <li class={style.featuresListItem}>
		<span class={style.featuresListItemIcon}>{icon}</span>
		<b class={style.featuresListItemText}>{text}</b>
		{tip && <span class={style.featuresListItemTip}>{tip}</span>}
	</li>;
}

function PotentialInvestmentReturnExample () {
	return <div class={style.investmentExample}>
		<div class={style.investmentExampleColumn}>
			<span class={style.investmentExampleTitle}>Investment amount</span>
			<b class={style.investmentExampleSum}>$1,000</b>
		</div>
		<div class={style.investmentExampleColumn}>
			<div  class={style.investmentExampleTipWrap}>
				<span class={style.investmentExampleTitle}>Potential return</span>
				<span class={style.investmentExampleTip}>Within 3-6 months</span>
			</div>
			<b class={style.investmentExampleSum}>$1,500 — $2,000</b>
		</div>
		<footer class={style.investmentExampleFooter}>* This is an example. Your actual return will depend on a particular event.</footer>
	</div>;
}

export default () => {
	return (
		<div class={style.home}>
			<h1>
        Conveniently synergize professional collaboration and idea-sharing with 24/365 internal or "organic" sources. Energistically coordinate high standards in infomediaries via open-source methods of empowerment. Dynamically enable.
			</h1>
			<h2>What this is</h2>
			<p>Conveniently synergize professional collaboration and idea-sharing with 24/365 internal or "organic" sources. Energistically coordinate high standards in infomediaries via open-source methods of empowerment. Dynamically enable.</p>
			<p>Conveniently synergize professional collaboration and idea-sharing with 24/365 internal or "organic" sources. Energistically coordinate high standards in infomediaries via open-source methods of empowerment. Dynamically enable.</p>
			<h2>Who we are</h2>
			<p>Conveniently synergize professional collaboration and idea-sharing with 24/365 internal or "organic" sources. Energistically coordinate high standards in infomediaries via open-source methods of empowerment. Dynamically enable.</p>
			<h2>How it works</h2>
			<p>We invite you to invest in upfront costs of bringing a top artist. Up to 100% ROI</p>
			<ul class={style.featuresList}>
				{FEATURES.map(mapRender(ListItem))}
			</ul>
			<PotentialInvestmentReturnExample />
			<h2>why it works</h2>
			<ul>
				<li>Top artists always sell out, resulting in a predictable investment.</li>
				<li>The price of a ticket increases the closer it gets to an event date.</li>
			</ul>

			<footer>
				<h2>We allow participation by an invite only.</h2>
				<p>If you want to participate, please fill out form below:</p>
				<SubscriptionForm />
				<copy>{new Date().getFullYear()}. Created with love by WeDao team.</copy>
			</footer>
		</div>
	);
};
