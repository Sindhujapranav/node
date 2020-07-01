var timestamp = new Date().getTime();

var todate = new Date(timestamp).getDate();
var tomonth = new Date(timestamp).getMonth() + 1;
var toyear = new Date(timestamp).getFullYear();
var time = new Date(timestamp).toTimeString();
var original_date = todate + '/' + tomonth + '/' + toyear + '===>' + time;
console.log(original_date)

module.exports.filename = original_date;
