var test = require("tape");
var myMethod = require("../js/logic.js");
test("test for city&Country", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

  myMethod.fetch(url, function(result) {
    var country = myMethod.getCountryName(result);
    var city = myMethod.getName(result);
    var actual = city + "," + country;
    var expected = "Gaza,PS";
    t.equal(actual, expected, "they are equal");
    t.end();
  });
});
test("test for wrong entry", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=ssssss&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  myMethod.fetch(url, function(result) {
    var actual = myMethod.getMessage(result);
    var expected = "city not found";
    t.deepEqual(actual, expected, "city not found");
    t.end();
  });
});

test("test for empty entry", function(t) {
  var cityName = "";
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  myMethod.fetch(url, function(result) {
    var actual = myMethod.getMessage(result);
    var expected = "Nothing to geocode";
    t.deepEqual(actual, expected, "Nothing to geocode");
    t.end();
  });
});

test("Test for get Name ", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  myMethod.fetch(url, function(result) {
    var actual = myMethod.getName(result);
    var expected = "Gaza";
    t.deepEqual(actual, expected, "getName is work");
    t.end();
  });
});

test("Test Next Five Day ", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/forecast?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

  myMethod.fetch(url, function(result) {
    var actual = myMethod.getNextFiveDay(result).length;
    var expected = 5;
  

    t.deepEqual(actual, expected, "All time is At 3:00 PM");
    t.end();
  });
});

test("Test Next Five Day at 3:00 PM", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/forecast?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

  myMethod.fetch(url, function(result) {
    var actual = myMethod.getNextFiveDay(result,myMethod.checkNextDayTime);
    var expected = true;
  
    t.deepEqual(actual, expected, "All time is At 3:00 PM");
    t.end();
  });
});
//**** These tests Will Be Failed Because actula result count change everyday ****/
// test("test for forecasting entry count", function(t) {
//   var url =
//     "http://api.openweathermap.org/data/2.5/forecast?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
//   myMethod.fetch(url, function(result) {
//     var actual =myMethod.getListLength(result);
//     var expected = 38;
//     t.deepEqual(actual, expected, "count is 40");
//     t.end();
//   });
// });


// test("Test for get Main Weather ", function(t) {
//   var url =
//     "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
//   myMethod.fetch(url, function(result) {
//     var actual = myMethod.getWeatherMain(result);
//     var expected = "Clear";
//     t.deepEqual(actual, expected, "getWeatherName is work");
//     t.end();
//   });
// });
// test("Test For Get Weather Main", function(t) {
//   var url =
//     "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

//   myMethod.fetch(url, function(result) {
//     var actual = myMethod.getWeatherMain(result);
//     var expected = "Clouds";
  

//     t.deepEqual(actual, expected, "get Weather Main is work");
//     t.end();
//   });
// });
// test("Test For Get Forecast Description", function(t) {
//   var url =
//     "http://api.openweathermap.org/data/2.5/forecast?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

//   myMethod.fetch(url, function(result) {
//     var actual = myMethod.getForecastDescription(result,0);
//     var expected = "clear sky";
  

//     t.deepEqual(actual, expected, "get forecast description is work");
//     t.end();
//   });
// });
// test("get Weather Temp ", function(t) {
//   var url =
// "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
//   myMethod.fetch(url, function(result) {
//     var actual = myMethod.getWeatherTemp(result);
//     var expected = 27;
  

//     t.deepEqual(actual, expected, "get Weather Temp is Work");
//     t.end();
//   });
// });

// test("get Weather Temp ", function(t) {
//   var url ="http://api.openweathermap.org/data/2.5/forecast?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
//   myMethod.fetch(url, function(result) {
//     var actual = myMethod.getNextFiveDay(result,myMethod.getForecastTemp)
//     var expected =[ 29, 27, 28, 28, 27 ];
  

//     t.deepEqual(actual, expected, "get Weather Temp is Work");
//     t.end();
//   });
// });
