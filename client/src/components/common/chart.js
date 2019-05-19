import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
 

class Chart extends React.Component {
  render() {
    return (
    	<div key={this.props.key}>
	      <HighchartsReact
	        highcharts={Highcharts}
	        options={this.props.options}
	      />
      </div>
    )
  }
}
 
export default Chart;