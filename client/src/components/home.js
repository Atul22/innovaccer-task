import React, {Component} from 'react';
import { connect } from "react-redux";
import LoginForm from './loginForm';
import AudienceChart from './audienceChart';
import BehaviourChart from './behaviourChart';
import EComOverview from './eComOverview';
import RealTime from './realTime';
import DateRange from './datePicker';
import STATE from '../const/state';

class Home extends Component {
	renderHeader = () => {
		return <p className="lead">Audience overview</p>;
	};

	renderLead = () => {
		return <p className="lead">You are not logged in!</p>;
	};
	render() {
		const {user} = this.props;
		if(!user) return <LoginForm />;
		return (
			<div>
				<DateRange />
				<div className="row">
					<div className="col-lg-6">
						<div>
							<RealTime />
						</div>

						<div>
							<BehaviourChart />
						</div>
					</div>

					<div className="col-lg-6">
						<div>
							<AudienceChart />
						</div>

						<div>
							<EComOverview />
						</div>
					</div>

				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=> ({
    user: state.get(STATE.USER)
});

export default connect(mapStateToProps, null)(Home);