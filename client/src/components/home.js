import React, {Component} from 'react';
import auth from '../services/authService';
import LoginForm from './loginForm';
import { connect } from "react-redux";

class Home extends Component {
	render() {
		return (
			<div>
				{
					!this.props.user ? 
						<LoginForm /> :
						<div>You are Logged In</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.get('user')
})

export default connect(mapStateToProps, null)(Home);