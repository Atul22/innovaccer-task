import React, {Component} from 'react';
import LoginForm from './loginForm';
import STATE from '../const/state';
import { connect } from "react-redux";

class Home extends Component {
	render() {
		const {user} = this.props;
		return (
			<div>
				{
					!user ? 
						<LoginForm /> :
						<div>You are Loggedin as {user}</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.get(STATE.USER)
})

export default connect(mapStateToProps, null)(Home);