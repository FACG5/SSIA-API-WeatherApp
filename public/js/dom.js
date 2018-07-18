function getElementById(elementId) {
  return document.getElementById(elementId);
}

var submit = getElementById("search");
var cityname = getElementById("cityname");

submit.addEventListener("click", function(e) {
  // console.log(submi/t);
  var cityNameValue = cityname.value;
  // console.log(cityNameValue);
  e.preventDefault();
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityNameValue +
    "&APPID=4638dc94ad7887e67dc768fd6a6c909c";
  fetch(url, function(result) {
    console.log(result, "dddd");

    if (result.cod != 404) {
      console.log(getCountryName(result));

      var urlOfForecast =
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        getName(result) +
        "," +
        getCountryName(result) +
        "&APPID=4638dc94ad7887e67dc768fd6a6c909c";
      fetch(urlOfForecast, function(result) {
        fiveDay = getNextFiveDay(result);
        console.log(fiveDay);

        var xxx = getNextFiveDay(result, getForecastTemp);
        console.log(xxx);
      });
    } else {
      alert("ff");
      return;
    }
  });
});
