import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings, text } from '../lib/settings';

class FooterMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	isActiveToggle = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	render() {
		const { title, items } = this.props;
		let ulItems = null;

		if (items && items.length > 0) {
			ulItems = items.map((item, index) => (
				<li key={index}>
					<NavLink to={item.url || ''}>{item.text}</NavLink>
				</li>
			));
		}

		return (
			<div className="column is-3">
				<div
					className={
						'footer-title mobile-padding' +
						(this.state.isActive ? ' footer-menu-open' : '')
					}
					onClick={this.isActiveToggle}
				>
					{title}
					<span />
				</div>
				<ul className="footer-menu">{ulItems}</ul>
			</div>
		);
	}
}

const SocialIcons = ({ icons }) => {
	if (icons && icons.length > 0) {
		const items = icons.map((icon, index) => (
			<a
				key={index}
				href={icon.url || ''}
				target="_blank"
				rel="noopener"
				title={icon.type}
				className={icon.type}
			/>
		));
		return <p className="social-icons">{items}</p>;
	} else {
		return null;
	}
};

const Contacts = ({ contacts }) => {
	if (contacts && contacts.length > 0) {
		const items = contacts.map((item, index) => {
			const contact = item ? item.text : null;
			if (contact && contact.indexOf('@') > 0) {
				return (
					<li key={index}>
						<a href={'mailto:' + contact}>{contact}</a>
					</li>
				);
			} else {
				return <li key={index}>{contact}</li>;
			}
		});
		return <ul className="footer-contacts">{items}</ul>;
	} else {
		return null;
	}
};

export default class Footer extends React.PureComponent {


	render() {

		return (
			<section class="section has-text-centered" id='furfooter'>
				<div class="container">
					<div class="columns">
						<div class="column">
							<ul class='right-list'>
								<li><a>Home</a></li>
								<li><a>Chair</a></li>
								<li><a>Table</a></li>
								<li><a>Futon</a></li>
							</ul>
						</div>
						<div class="column">
							<figure class="image is-96x96" style={{ margin: 'auto' }}>
								<img src="https://condehouse.com.au/wp-content/uploads/2018/12/50-th.png" />
							</figure>
						</div>
						<div class="column right-copy">

							<h3>Copyright Haiku Wares 2019</h3>
						</div>
					</div>
					<div className='gap'></div>
				</div>
			</section>
		);
	}
}
