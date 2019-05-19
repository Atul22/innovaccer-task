import React, {Component} from 'react';
import HomeCard from './common/card';
import Tabs from './common/tabs';

const tabData = [
  {id: 1, title: 'Revenue', value: '$0.00'},
  {id: 2, title: 'Transactions', value: 0},
  {id: 3, title: 'Revenue per user', value: '$0.00'},
];

class EComOverview extends Component {
	renderHeader = () => {
    	return <h4>Ecommerce overview</h4>;
  	};

	render() {
		return (
			<HomeCard
		        header={this.renderHeader()}
		        tabs={<Tabs data={tabData}/>}
	      />
		)
	}
}

export default EComOverview;