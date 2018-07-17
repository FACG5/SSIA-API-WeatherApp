function getElementById(elementId){
  return document.getElementById(elementId);
}




var submit = getElementById("search");
var cityname=getElementById("cityname");

submit.addEventListener("click",function(e){
  var cityNameValue= cityname.value;
e.preventDefault();
var url = "http://api.openweathermap.org/data/2.5/weather?q="+cityNameValue+"&APPID=4638dc94ad7887e67dc768fd6a6c909c";
fetch(url,function(result){

  console.log(result);
  console.log(result.name);
  console.log(result.sys.country);

})


})