if (typeof module !== "undefined") {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}

// Fetch Function for APIs
function fetch(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        // ready
        var result = JSON.parse(xhr.responseText);
        cb(result);
      } else if (xhr.status == 404) {
        // error
        var result = JSON.parse(xhr.responseText);
        cb(result);
      } else if (xhr.status == 400) {
        // no entry
        var result = JSON.parse(xhr.responseText);
        cb(result);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getMessage(result) {
  return result.message;
}
function getName(result) {
  return result.name;
}
function getListLength(result) {
  return result.list.length;
}
function getWeatherTemp(result) {
  return Math.round(result.main.temp - 273.15);
  //kelvin to celsius
}

function getCountryName(result) {
  return result.sys.country;
}

function getWeatherMain(result) {
  return result.weather[0].main;
}
function getWeatherDescription(result) {
  return result.weather[0].description;
}

function getWeatherIcon(result) {
  return result.weather[0].icon;
}

function getNextFiveDay(result, cb) {
  var arr = [];
  for (var i = 0; i < result.list.length; i++) {
    if (result.list[i].dt_txt.includes("15:00:00")) {
      arr.push(result.list[i]);
    }
  }
  if (cb) {
    return cb(arr);
  } else {
    return arr;
  }
}
function checkNextDayTime(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i].dt_txt.includes("15:00:00")) return false;
  }
  return true;
}

function getForecastTemp(arr) {
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    tempArr.push(Math.round(arr[i].main.temp - 273.15));
  }
  return tempArr;
}

function getForecastMain(result, i) {
  return result.list[i].weather[0].main;
}
function getForecastDescription(arr) {
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    tempArr.push(arr[i].weather[0].description);
  }
  return tempArr;
}
function getForecastIcon(arr) {
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    tempArr.push(arr[i].weather[0].icon);
  }
  return tempArr;
}

if (typeof module !== "undefined") {
  module.exports = {
    getForecastMain,
    getForecastTemp,
    getForecastDescription,
    getForecastIcon,
    getCountryName,
    getWeatherMain,
    getWeatherDescription,
    getWeatherIcon,
    getName,
    fetch,
    getNextFiveDay,
    checkNextDayTime,
    getMessage,
    getListLength,
    getWeatherTemp
  };
}
