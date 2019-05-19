import React from 'react'
import Highcharts from 'highcharts'
import {behaviourChartConfig} from '../utils/chartData';
import {getAvgSessionDuration} from '../utils/helpers';
import Chart from './common/chart';
import HomeCard from './common/card';
import Tabs from './common/tabs';
import Summary from './common/summary';

const data = behaviourChartConfig.series[0].data;
const avgSessionDuration = getAvgSessionDuration(data);

const tabData = [
  {id: 1, title: 'Avg. session duration', value: avgSessionDuration},
  {id: 2, title: 'Bounce Rate', value: 106},
  {id: 3, title: 'Page Views', value: 103},
  {id: 4, title: 'Page/session', value: 103},
];

class BehaviourChart extends React.Component {
  renderHeader = () => {
    return <h4>Behaviour overview</h4>;
  };

  renderChart = () => {
    return (
      <Chart
        highcharts={Highcharts}
        options={behaviourChartConfig}
      />
    );
  }

  render() {
    return (
      <HomeCard
        header={this.renderHeader()}
        tabs={<Tabs data={tabData}/>}
        summary={<Summary subTitle='Avg. session duration' value={avgSessionDuration}/>}
        lead={this.renderChart()}
      />
    )
  }
}
 
export default BehaviourChart;