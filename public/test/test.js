var fetch = require('./logic.js');
var test = require('tape');

// Test for first API --Current Weather--
test("Test for City & Country", function (t) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

	fetch(url, function (result) {
		var country = result.sys.country;
		var city = result.name;
		var actual = city + "," + country;
		var expected = "Gaza,PS";
		t.equal(actual, expected, "they are equal");
		t.end();
	})
});

test("Test City Name", function (t) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

	fetch(url, function (result) {
		var actual = result.name;
		var expected = "Gaza"
		t.deepEqual(actual, expected, 'the city name passed');
		t.end();
	})
});

test("Test for Wrong Entry", function (t) {

	var url = "http://api.openweathermap.org/data/2.5/weather?q=ssssss&APPID=4638dc94ad7887e67dc768fd6a6c909c";
	fetch(url, function (result) {
		var actual = result.message;
		var expected = "city not found";
		t.deepEqual(actual, expected, "city not found");
		t.end();
	})
});

test("Test for Empty Entry", function (t) {
	var cityName = ""
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=4638dc94ad7887e67dc768fd6a6c909c";
	fetch(url, function (result) {
		var actual = result.message;
		var expected = "Nothing to geocode";
		t.deepEqual(actual, expected, "Nothing to geocode");
		t.end();
	})
});

// Test for second API --Forcast For 5 days/3 Hours--
test("Test for Forecasting Entry Count", function (t) {

	var url = "http://api.openweathermap.org/data/2.5/forecast?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";
	fetch(url, function (result) {
		var actual = result.list.length;
		var expected = 40;
		t.deepEqual(actual, expected, "count is 40");
		t.end();
	})
});