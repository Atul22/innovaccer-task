function getRandomInt(max) {
  return Math.ceil(Math.random() * Math.floor(max));
}

function getRandomData(numPoints) {
  const data = [];
  for(let i = 0; i < numPoints; i++) {
    data.push(getRandomInt(10));
  }
  return data;
}

export const audienceChartConfig = {
  chart: {
      height: 200,
      type: 'line',
  },
  title:{
    text:''
  },
  legend: {
      align: 'left',
      verticalAlign: 'top',
      x: 0,
      y: -20
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {enabled: false},
    tickInterval: 2
  },
  series: [{
    data: getRandomData(20),
    pointStart: Date.UTC(2009, 0, 1),
    pointInterval: 24 * 3600 * 1000 * 5, // five days
    showInLegend: false
  }]
};

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomTimeData(numPoints) {
  const data = [];
  for(let i = 0; i < numPoints; i++) {
    data.push(getRandomInt(240) * 1000);
  }
  console.log(data);
  return data;
}

export const behaviourChartConfig = {
  chart: {
      height: 200,
      type: 'line',
  },
  title:{
    text:''
  },
  legend: {
      align: 'left',
      verticalAlign: 'top',
      x: 0,
      y: -20
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    type: 'datetime',
    title: {enabled: false},
    tickInterval: 35000,
    dateTimeLabelFormats: { //force all formats to be hour:minute:second
      second: '%H:%M:%S',
      minute: '%H:%M:%S',
      hour: '%H:%M:%S',
      day: '%H:%M:%S',
      week: '%H:%M:%S',
      month: '%H:%M:%S',
      year: '%H:%M:%S',
    }
  },
  series: [{
    data: getRandomTimeData(20),
    pointStart: Date.UTC(2009, 0, 1),
    pointInterval: 24 * 3600 * 1000 * 5, // five days
    showInLegend: false
  }]
}