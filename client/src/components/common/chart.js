import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
 

class Chart extends React.Component {
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={this.props.options}
      />
    )
  }
}
 
export default Chart;