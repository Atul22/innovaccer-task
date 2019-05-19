import React, {Component} from 'react';
import HomeCard from './common/card';
import Summary from './common/summary';

const title = 'Real Time';
const subTitle = 'Users right now';
const value = 0;

class RealTime extends Component {
  	renderSummary = () => {
    	return (
    		<Summary
    			title={title}
    			subTitle={subTitle}
    			value={value} 
    		/>
		);
  	};

	render() {
		return (
			<HomeCard
		        summary={this.renderSummary()}
	      />
		)
	}
}

export default RealTime;