import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PrivateRoute from './helpers/PrivateRoute';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

class Routes extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoute path="/dashboard"  component={Dashboard}/>
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
				</Switch>
			</div>
		);
	}
}

export default Routes;