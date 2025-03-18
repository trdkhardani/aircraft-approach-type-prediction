// only required in node or browserify otherwise it's a global.
var parseMETAR = require("metar");

// console.log(parseMETAR("KSFO 1456Z 35003KT 1/4SM FG VV002 09/09 A3023 (THREE ZERO TWO THREE)"));
// console.log(parseMETAR("KSFO 1352Z VRB05KT 10SM FEW250 10/03 A2998"));
// console.log(parseMETAR("KJFK 0512Z 16009KT 2SM -DZ BR OVC005 07/05 A3015"));
console.log(parseMETAR("KLAX 081853Z 21015G25KT 1SM +TSRA BKN020CB 18/16 A3001").weather.abbreviation);
// add "station" and "time"