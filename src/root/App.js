import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {withRouter} from 'react-router'

import './App.css';
import BusinessHome from "../pages/bussines-home/Business-home";
import Home from "../pages/home/Home";
import SignupSuccess from "../pages/signup-success";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DealDetails from "../pages/deal-details/Deal-details";
import CustomerBusinessApp from "../pages/customer-business-app";
import SignUp from "../pages/sign-up";
import RecoverPassword from "../pages/recover-password";
import LoginPage from "../pages/login"

const App = ({match, location, history}) => {
	const [isLoggedIn, toggleLogin] = useState(false);
	const loginAndRedirect = (loginSuccess) => {
		toggleLogin(loginSuccess);
		if(loginSuccess){
			history.push('/business-home')
		}
	}
	let mainClass = `${location.pathname === '/about-us' ? 'home-main-block' : 'container'}`;

	switch (location.pathname) {
		case '/about-us':
			mainClass = 'home-main-block';
			break;
		case '/business-home':
			mainClass = 'main-container';
			break;
		default:
			mainClass = '';
	}


	return (
		// add main-container container class for business pages
		// add home-main-block  class for home page
		<main className={`min-vh-100 ${mainClass}`}>
			<Header isLoggedIn={isLoggedIn} logout={loginAndRedirect}/>
			<Switch>
				<Route path="/free-business-invitation" component={() => <SignUp login={toggleLogin}/>}/>
				<Route path="/business-home" component={BusinessHome}/>
				<Route path="/signup-success" component={SignupSuccess}/>
				<Route path="/deal-details" component={DealDetails}/>
				<Route path="/customer-business-app" component={CustomerBusinessApp}/>
				<Route path="/recover" component={RecoverPassword}/>
				<Route path="/login" component={LoginPage}/>
				<Route exact path="/about-us" component={Home}/>
				<Redirect to="/about-us"/>
			</Switch>
			<Footer/>
		</main>
	);
};

export default withRouter(App);
