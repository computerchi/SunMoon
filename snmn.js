const calc = require("suncalc2");

console.log("\nSun Times:");
var times = calc.getTimes(new Date(), 29.3833, 48);
console.log(times);

console.log("\nSun Rise:");
var sunriseStr = times.sunrise.getHours() + ":" + times.sunrise.getMinutes();
console.log(sunriseStr);

console.log("\nSun Position:");
var sunrisePos = calc.getPosition(times.sunrise, 51.5, -0.1);
console.log(sunrisePos);

console.log("\nSun Rise Azimuth in degrees:");
var sunriseAzimuth = (sunrisePos.azimuth * 180) / Math.PI;
console.log(sunriseAzimuth);

console.log("\nMoon Times:");
var moonTimes = calc.getMoonTimes(new Date(), 29.3833, 48);
console.log(moonTimes);

console.log("\nMoon Illumination:");
var moonLight = calc.getMoonIllumination(new Date());
console.log(moonLight);

console.log("\nMoon Position:");
var moonPos = calc.getMoonPosition(new Date(), 29.3833, 48);
console.log(moonPos);
