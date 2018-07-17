var MyMethods = require("./logic.js");

var test = require("tape");

test("test for city&Country", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

  MyMethods.fetch(url, function(result) {
    var country = result.sys.country;
    var city = result.name;
    var actual = city + "," + country;
    var expected = "Gaza,PS";
    t.equal(actual, expected, "they are equal");
    t.end();
  });
});
test("test for wrong entry", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=ssssss&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  MyMethods.fetch(url, function(result) {
    var actual = result.message;
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
  MyMethods.fetch(url, function(result) {
    var actual = result.message;
    var expected = "Nothing to geocode";
    t.deepEqual(actual, expected, "Nothing to geocode");
    t.end();
  });
});
test("test for forecasting entry count", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/forecast?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  MyMethods.fetch(url, function(result) {
    var actual = result.list.length;
    var expected = 40;
    t.deepEqual(actual, expected, "count is 40");
    t.end();
  });
});

test("Test for get Name ", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  MyMethods.fetch(url, function(result) {
    var actual = MyMethods.getName(result);
    var expected = "Gaza";
    t.deepEqual(actual, expected, "getName is work");
    t.end();
  });
});

test("Test for get Name ", function(t) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  MyMethods.fetch(url, function(result) {
    var actual = MyMethods.getWeatherMain(result);
    var expected = "Clear";
    t.deepEqual(actual, expected, "getName is work");
    t.end();
  });
});
