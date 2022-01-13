import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	const history = useHistory();

	return (
		<footer className="col-xl-11 mx-auto">
			<ul className="list-unstyled d-flex justify-content-center flex-wrap">
				<li className="social-icon">
					<a href="https://www.facebook.com/momnpophub" className="social-icon__link d-block fb"
					   target="_blank" rel="noopener noreferrer"/>
				</li>
				<li className="social-icon">
					<a href="https://www.instagram.com/momnpophub/" className="social-icon__link d-block instagram"
					   target="_blank" rel="noopener noreferrer"/>
				</li>
				<li className="social-icon">
					<a href="https://www.linkedin.com/company/momnpophub/"
					   className="social-icon__link d-block linkedin" target="_blank" rel="noopener noreferrer"/>
				</li>
				<li className="social-icon">
					<a href="https://twitter.com/momnpophub" className="social-icon__link d-block twitter"
					   target="_blank" rel="noopener noreferrer"/>
				</li>
				<li className="social-icon">
					<a href="https://open.spotify.com/show/0qE4P5dlLXVzmoNunAWMC2?si=h930NSMYTPCoOS-PHO2Gqg"
					   className="social-icon__link d-block spotify" target="_blank" rel="noopener noreferrer"/>
				</li>
				<li className="social-icon">
					<a href="https://play.google.com/store/apps/details?id=com.momnpophub"
					   className="social-icon__link d-block google-play" target="_blank" rel="noopener noreferrer"/>
				</li>
				<li className="social-icon">
					<a href="https://www.youtube.com/channel/UCJPIGMXPga0AM_1OrvQU55Q/"
					   className="social-icon__link d-block youtube" target="_blank" rel="noopener noreferrer"/>
				</li>
				<li className="social-icon">
					<a href="https://apps.apple.com/us/app/mom-n-pop-hub/id1494101666"
					   className="social-icon__link d-block apple" target="_blank" rel="noopener noreferrer"/>
				</li>
			</ul>
			<ul className="footer-menu d-flex justify-content-between list-unstyled flex-wrap position-relative">
				<li className="footer-menu__item text-center">
					<Link to = '/about-us'
					   className="footer-menu__item__link text-decoration-none">About Us
					</Link>
				</li>
				<li className="footer-menu__item text-center">
					<Link to='/free-business-invitation'
					      className="footer-menu__item__link text-decoration-none">Add Your Business & Deals
						For <span>FREE</span>
					</Link>
				</li>
				<li className="footer-menu__item text-center">
					<Link to='/customer-business-app'
					      className="footer-menu__item__link text-decoration-none">Customer & Business App</Link>
				</li>
				<li className="footer-menu__item text-center">
					<a href="https://app.termly.io/document/terms-of-use-for-website/cfb6f95a-3618-425f-b4c8-44bd59264001"
					   target="_blankk"
					   rel="noreferrer"
					   className="footer-menu__item__link text-decoration-none">Terms & Conditions</a>
				</li>
				<li className="footer-menu__item text-center">© 2020 Mom&Pop. All rights reserved.</li>
			</ul>
		</footer>)
};

export default Footer;
