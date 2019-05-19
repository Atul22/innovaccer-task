import React from 'react'
import Highcharts from 'highcharts'
import {audienceChartConfig} from '../utils/chartData';
import Chart from './common/chart';
import HomeCard from './common/card';
import Tabs from './common/tabs';
import Summary from './common/summary';
import {getTotalUsers} from '../utils/helpers';
 
const data = audienceChartConfig.series[0].data;
const totalUsers = getTotalUsers(data);

const tabData = [
  {id: 1, title: 'Users', value: totalUsers},
  {id: 2, title: 'Sessions', value: 106},
  {id: 3, title: 'New User', value: 103},
];

class AudienceChart extends React.Component {
  renderHeader = () => {
    return <h4>Audience overview</h4>;
  };

  renderChart = () => {
    return (
      <Chart
        highcharts={Highcharts}
        options={audienceChartConfig}
      />
    );
  }

  render() {
    return (
      <HomeCard
        header={this.renderHeader()}
        tabs={<Tabs data={tabData}/>}
        summary={<Summary subTitle='Users over time' value={totalUsers}/>}
        lead={this.renderChart()}
      />
    )
  }
}
 
export default AudienceChart;