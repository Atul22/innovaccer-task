import React from 'react'
import { connect } from "react-redux";
import _ from 'lodash';
import Highcharts from 'highcharts';
import Tabs from './common/tabs';
import Chart from './common/chart';
import HomeCard from './common/card';
import Summary from './common/summary';
import {audienceChartConfig, getRandomData} from '../utils/chartData';
import {getCurrentMonthRange, getTotalUsers} from '../utils/helpers';
import STATE from '../const/state';
 
const chartData = audienceChartConfig.series[0].data;
let totalUsers = getTotalUsers(chartData);

let tabData = [
  {id: 1, title: 'Users', value: totalUsers},
  {id: 2, title: 'Sessions', value: 106},
  {id: 3, title: 'New User', value: 103},
];

class AudienceChart extends React.Component {

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

    const config = _.cloneDeep(audienceChartConfig);
    config.series = series;

    return config;
  }

  updateTabData = () => {
    totalUsers = getTotalUsers(this.data);
    tabData = _.cloneDeep(tabData);
    tabData[0].value = totalUsers;
  }

  renderHeader = () => {
    return <h4>Audience overview</h4>;
  };

  renderChart = () => {

    this.data = getRandomData(20);
    const config = this.getNewConfig();
    this.updateTabData();

    return (
      <Chart
        highcharts={Highcharts}
        options={config}
      />
    );
  }

  renderTabs = () => {
    return <Tabs data={tabData}/>
  }

  renderSummary = () => {
    return <Summary subTitle='Users over time' value={totalUsers}/>;
  }


  render() {
    return (
      <HomeCard
        header={this.renderHeader()}
        tabs={this.renderTabs()}
        summary={this.renderSummary()}
        lead={this.renderChart()}
      />
    )
  }
}
 
const mapStateToProps = (state) => ({
    currentMonth: state.get(STATE.CURRENT_MONTH)
})

export default connect(mapStateToProps, null)(AudienceChart);