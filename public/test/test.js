var fetch = require('./logic.js');
var test = require('tape');

test("test for city&Countty", function (t) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

	fetch(url, function (result) {
		var country = result.sys.country;
		var city = result.name;
		var actual = city + "," + country;
		var expected = "Gaza,PS";
		t.equal(actual, expected, "they are equal");
		t.end();
	})
})

test('City Name Test', function (t) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=gaza,ps&APPID=4638dc94ad7887e67dc768fd6a6c909c";

	fetch(url, function (result) {
		var actual = result.name;
		var expected = "Gaza"
		t.deepEqual(actual, expected, 'the city name passed');
		t.end();
	})
});

test("test for city&Countty", function (t) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=ssssss&APPID=4638dc94ad7887e67dc768fd6a6c909c";

	fetch(url, function (result) {
		var actual = result.message;
		var expected = "city not found";
		t.equal(actual, expected, "they are equal");


		t.end();

	})

})

test("test for empty entry ", function (t) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=&APPID=4638dc94ad7887e67dc768fd6a6c909c";

	fetch(url, function (result) {
		var actual = result.message;
		var expected = "city not found";
		t.equal(actual, expected, "they are equal");


		t.end();

	})

})