export function getAvgSessionDuration(data) {
  let size = data.length;
  let sum = 0;
  data.map( val => sum += val);
  return msToHMS(sum / size);
}

export function msToHMS(s) {

  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
}

export function msToDDMMYYYY(ms) {
  var date = new Date(ms); 
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return (`${day}/${month}/${year}`);
}


export function getTotalUsers(data) {
    let sum = 0;
    data.map( val => sum += val);
    return sum;
}

function normalizeTime(d) {
    d.setHours(12);
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
};

function getISODate(month, day) {
    const d = new Date();
    d.setMonth(month, day);
    return normalizeTime(d).getTime();
};


function getCurrentYear() {
  const data = [];
  for(let i = 0; i < 11; i++) {
    const temp = {
      firstDay: getISODate(i, 1),
      lastDay: getISODate(i + 1, 0)
    };
    data.push(temp);
  }
  return data;
}

export function getCurrentMonthRange(month) {
  return getCurrentYear()[month];

}