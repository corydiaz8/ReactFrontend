import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LoginModal from '../login-modal'

import './Header.css';
import Logo from '../../assets/images/logo/momnpophub-logo.svg';
import DefaultImage from '../../assets/images/default.png';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
	list: {
		width: 350,
	},
	fullList: {
		width: 'auto',
	},
});

const Header = ({ isLoggedIn, logout }) => {
	const history = useHistory();

	const classes = useStyles();
	const [state, setState] = React.useState({ right: false });
	const [open, setOpen] = React.useState(false);
	const [showLogin, setShowLogin] = React.useState(false);
	const [isDisabled, setIsDisabled] = React.useState(false);

	let location = useLocation().pathname,
		headerClass = location !== '/home' ? 'logout-header' : null;


	const handleClick = () => {
		setOpen(!open);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const navigationLinks = [
		{
			title: 'About Us',
			path: 'about-us'
		},
		{
			title: 'Add Your Business & Deals For FREE',
			path: 'free-business-invitation'
		},
		{
			title: 'Customer & Business App',
			path: 'customer-business-app'
		}].map((link, index) =>
			<React.Fragment key={index + link.title}>
				<Divider />
				<ListItem button className="justify-content-center"
					selected={location === '/' + link.path}
					classes={{ selected: 'active' }}
					onClick={() => { setState({ 'right': false }); history.push(`/${link.path}`) }}>
					{link.title}
				</ListItem>
			</React.Fragment>
		);


	const list = () => (
		<div role="presentation">
			{!isLoggedIn && <List className="logout-header__ite    gin-toggle text-decoration-none">
				<ListItem className='d-flex justify-content-center align-items-center'
					onClick={() => setShowLogin(true)}> <i
					className="icon-user-active mr-2" />
					Business Login
				</ListItem>
				{navigationLinks}
			</List>
			}
			{isLoggedIn && <List>
				<ListItem button onClick={handleClick} className="justify-content-center">
					<div className="d-flex align-items-center menu-user">
						<span className="menu-user__name text-dark">
							{'Joe Flowers'}
						</span>
						<figure className="rounded-circle overflow-hidden m-0 menu-user__image bg-white">
							<img className="thumbnail-image img-fluid w-100 h-100"
								src={DefaultImage}
								alt="user pic"
							/>
						</figure>
					</div>
				</ListItem>
				<ListItem>
					<Divider />
					<ListItem button className={classes.nested} onClick={() => { setState({ 'right': false }); logout(false); history.push('/about-us') }}>
						Log Out
						</ListItem>
				</ListItem>
			</List>
			}
		</div>
	);
	return (
		<div className={headerClass}>
			<React.Fragment>
				<Navbar
					className="header-menu col-xl-11 mx-auto d-flex align-content-center justify-content-between"
					expand="xl">
					<Navbar.Brand as={Link} to="/">
						<img src={Logo} alt="" />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white"
						onClick={toggleDrawer('right', true)} />
					{!isLoggedIn && <Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link
								className={`header-menu__item d-flex align-items-center p-0 ${location === '/about-us' ? 'active' : ''}`}
								onClick={() => history.push('/about-us')}>
								About Us
							</Nav.Link>
							<Nav.Link
								className={`header-menu__item d-flex align-items-center p-0 ${location === '/free-business-invitation' ? 'active' : ''}`}
								onClick={() => history.push('/free-business-invitation')}>
								Add Your Business & Deals For <span className="ml-2"> FREE</span>
							</Nav.Link>
							<Nav.Link
								className={`header-menu__item d-flex align-items-center p-0 ${location === '/customer-business-app' ? 'active' : ''}`}
								onClick={() => history.push('/customer-business-app')}>
								Customer & Business App
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>}
					{isLoggedIn && <Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link
								className={`header-menu__item d-flex align-items-center p-0 ${location === '/business-home' ? 'active' : ''}`}
								onClick={() => history.push('/business-home')}>
								Business Home
							</Nav.Link>
							<Nav.Link
								className={`header-menu__item d-flex align-items-center p-0 ${location === '/customer-business-app' ? 'active' : ''}`}
								onClick={() => history.push('/customer-business-app')}>
								Customer & Business App
							</Nav.Link>
							<Nav.Link
								className={`header-menu__item d-flex align-items-center p-0 ${location === '/about-us' ? 'active' : ''}`}
								onClick={() => history.push('/about-us')}>
								About Us
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>}
					{!isLoggedIn && <Link to="/login" className="logout-header__item text-decoration-none d-none d-xl-block"
						onClick={(evt) => {evt.preventDefault(); setShowLogin(true)}}>
						<i className="icon-user-active mr-2" />
						Business Login</Link>}
					{isLoggedIn && <NavDropdown id="basic-nav-dropdown" className="header-menu__item header-dropdown"
						title={
							<div className="d-flex align-items-center menu-user">
								<span className="menu-user__name">
									{'Joe Flowers'}
								</span>
								<figure
									className="rounded-circle overflow-hidden m-0 menu-user__image bg-white">
									<img className="thumbnail-image img-fluid w-100 h-100"
										src={DefaultImage}
										alt="user pic"
									/>
								</figure>
							</div>
						}>
						<Link to='/home'>
							<NavDropdown.Item href="#action/3.1" onClick={() => logout(false)}>
								Log Out
							</NavDropdown.Item>
						</Link>
					</NavDropdown>
					}
				</Navbar>
				<Drawer
					anchor={'right'}
					open={state['right']}
					onClose={toggleDrawer('right', false).bind(this)}
				>

					{list()}
				</Drawer>
				<LoginModal show={showLogin} disabled={isDisabled} handleShow={() => setShowLogin(true)} handleClose={() => setShowLogin(false)} handleLogin={() => logout(true)} setDisabled={(disabled) => setIsDisabled(disabled)}/>
			</React.Fragment>
		</div>
	)
};

export default Header;
