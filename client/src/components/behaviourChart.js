import React from 'react'
import Highcharts from 'highcharts'
import { connect } from "react-redux";
import _ from 'lodash';
import Tabs from './common/tabs';
import Chart from './common/chart';
import Summary from './common/summary';
import HomeCard from './common/card';
import {behaviourChartConfig, getRandomTimeData} from '../utils/chartData';
import {getAvgSessionDuration, getCurrentMonthRange} from '../utils/helpers';
import STATE from '../const/state';

const chartData = behaviourChartConfig.series[0].data;
let avgSessionDuration = getAvgSessionDuration(chartData);

let tabData = [
  {id: 1, title: 'Avg. session duration', value: avgSessionDuration},
  {id: 2, title: 'Bounce Rate', value: '83.96%'},
  {id: 3, title: 'Page Views', value: 133},
  {id: 4, title: 'Page/session', value: 1.25},
];

class BehaviourChart extends React.Component {
  data: chartData;

  getNewConfig = () => {
    const currentMonthRange = getCurrentMonthRange(this.props.currentMonth);
    const firstDay = currentMonthRange.firstDay;

    const series = [{
      data: this.data,
      pointInterval: 24 * 3600 * 1000 * 2, // five days
      pointStart: firstDay,
      showInLegend: false
    }];

    const config = _.cloneDeep(behaviourChartConfig);
    config.series = series;

    return config;
  }


  updateTabData = () => {
    avgSessionDuration = getAvgSessionDuration(this.data);
    tabData = _.cloneDeep(tabData);
    tabData[0].value = avgSessionDuration;
  }

  renderHeader = () => {
    return <h4>Behaviour overview</h4>;
  };

  renderChart = () => {
    this.data = getRandomTimeData(20);
    const config = this.getNewConfig();
    this.updateTabData();

    return (
      <Chart
        highcharts={Highcharts}
        options={config}
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
 
const mapStateToProps = (state) => ({
    currentMonth: state.get(STATE.CURRENT_MONTH)
})

export default connect(mapStateToProps, null)(BehaviourChart);