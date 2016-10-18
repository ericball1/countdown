var current = moment();
var period1 = current.hour(9).minute(5).second(0);
current = moment();
var period2 = current.hour(9).minute(59).second(0);
current = moment();
var period3 = current.hour(10).minute(53).second(0);
current = moment();
var period4 = current.hour(12).minute(13).second(0);
current = moment();
var lunch1 = current.hour(11).minute(17).second(0);
current = moment();
var lunch2 = current.hour(11).minute(45).second(0);
current = moment();
var lunch3 = current.hour(12).minute(13).second(0);
current = moment();
var period5 = current.hour(13).minute(7).second(0);
current = moment();
var period6 = current.hour(14).minute(1).second(0);
current = moment();
var period7 = current.hour(14).minute(55).second(0);
current = moment();
/* console.log(period1);
console.log(period2);
console.log(period3);
console.log(period4);
console.log(lunch1);
console.log(lunch2);
console.log(lunch3);
console.log(period5);
console.log(period6);
console.log(period7); */

var periods = [period1, period2, period3, period4, lunch1, lunch2, lunch3, period5, period6, period7];

for(var i = 0; i < periods.length; i++) {
	periods[i].day(periods[i].day() + 1);
	console.log(periods[i]);
}

if(moment().hour() >= 15) {
	console.log(true);
}