import React, {Component} from 'react';
import auth from '../services/authService';
import LoginForm from './loginForm';

class Home extends Component {
	render() {
		return (
			<div>
				{
					!auth.getCurrentUser() ? 
						<LoginForm /> :
						<div>You are Logged In</div>
				}
			</div>
		)
	}
}

export default Home;