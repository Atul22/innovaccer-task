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


export function getTotalUsers(data) {
    let sum = 0;
    data.map( val => sum += val);
    return sum;
}