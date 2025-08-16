// days, hour, minutes, seconds
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor((date/(1000*60*60))%24);  //% 24 → keeps hours left after full days.
const minutes = Math.floor((date/(1000*60))%60);  //% 60 → keeps minutes left after full hours.
const seconds = Math.floor((date/(1000))%60);   //% 60 → keeps seconds left after full minutes.
console.log(days)
console.log(hours)
console.log(minutes)
console.log(seconds)
console.log(`Olymic countdown: Days: ${days} , Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);