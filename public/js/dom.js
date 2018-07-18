function getElementById(elementId) {
  return document.getElementById(elementId);
}
function createElement(elemnt) {
  return document.createElement(elemnt);
}
function clearDiv(element) {
  return (element.textContent = "");
}

var submit = getElementById("search");
var cityNameText = getElementById("cityname");

submit.addEventListener("click", function(e) {
  e.preventDefault();
  var container = getElementById("container");
  var cityNameValue = cityname.value;
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityNameValue +
    "&APPID=" +
    config.MY_KEY;

  fetch(url, function(result) {
    if (result.cod == 200) {
      var centerEelement = getElementById("centerEelement");
      clearDiv(centerEelement);
      var container = getElementById("container");
      clearDiv(container);

      var city = createElement("h3");
      var cityName = getName(result);
      var countryName = getCountryName(result);
      city.textContent = cityName + "," + countryName;

      container.appendChild(city);
      cityNameText.value = "";

      var img = createElement("img");
      var icon = getWeatherIcon(result);
      img.src = "https://openweathermap.org/img/w/" + icon + ".png";

      centerEelement.appendChild(img);
      var span = createElement("span");
      var temp = getWeatherTemp(result);
      var cSpan = createElement("span");
      cSpan.textContent = "o";
      span.classList = "temp";
      cSpan.classList = "cel";
      span.textContent = temp;
      var description = createElement("span");
      var descriptionClass = getElementById("discription");
      clearDiv(descriptionClass);
      description.classList = "diss";
      var resultDesc = getWeatherDescription(result);
      description.textContent = resultDesc;

      var moreDetails = createElement("button");
      moreDetails.setAttribute("id", "btn");
      var i = createElement("i");
      i.classList = "fas fa-plus-square";
      var buttonSpan = createElement("span");
      buttonSpan.classList = "details";
      buttonSpan.textContent = "Show details";
      moreDetails.appendChild(i);
      moreDetails.appendChild(buttonSpan);

      centerEelement.appendChild(span);
      centerEelement.appendChild(cSpan);
      descriptionClass.appendChild(description);
      descriptionClass.appendChild(moreDetails);
      var ul = createElement("ul");

      moreDetails.addEventListener("click", function(e) {
        e.preventDefault();
        clearDiv(ul);

        var forecastText = city.textContent;
        var urlOfForecast =
          "http://api.openweathermap.org/data/2.5/forecast?q=" +
          forecastText +
          "&APPID=" +
          config.MY_KEY;

        fetch(urlOfForecast, function(result) {
          var fiveDayTemp = getNextFiveDay(result, getForecastTemp);
          var fiveDayDesc = getNextFiveDay(result, getForecastDescription);
          var fiveDayIcon = getNextFiveDay(result, getForecastIcon);
          for (let i = 0; i < 5; i++) {
            fiveDayIcon[i] =
              "https://openweathermap.org/img/w/" + fiveDayIcon[i] + ".png";
          }
          for (var i = 0; i < 5; i++) {
            var li = createElement("li");
            var img = createElement("img");
            img.src = fiveDayIcon[i];
            img.classList = "forecast";
            var div = createElement("div");
            div.appendChild(img);

            li.textContent = fiveDayTemp[i] + " " + fiveDayDesc[i];
            li.appendChild(img);

            ul.appendChild(li);
          }

          descriptionClass.appendChild(ul);
        });
      });
    } else {
      var container = getElementById("container");

      var nothingFound = createElement("h3");
      nothingFound.textContent = "City Not Found ! ";
      clearDiv(container);
      container.appendChild(nothingFound);
      var descriptionClass = getElementById("discription");
      clearDiv(descriptionClass);
      var centerEelement = getElementById("centerEelement");
      clearDiv(centerEelement);
    }
  });
});
