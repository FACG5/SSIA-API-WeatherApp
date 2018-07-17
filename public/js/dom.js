function getElementById(elementId){
  return document.getElementById(elementId);
}



var submit = getElementById("search");
var cityname = getElementById("cityname");

submit.addEventListener("click",function(e){
  console.log(submit);
  var cityNameValue= cityname.value;
  console.log(cityNameValue);
e.preventDefault();
var url = "http://api.openweathermap.org/data/2.5/weather?q="+cityNameValue+"&APPID=4638dc94ad7887e67dc768fd6a6c909c";
console.log(url);
myMethod.fetch(url,function(result){
/////for test only


var urlOfWeather ="http://api.openweathermap.org/data/2.5/forecast?q="+myMethod.getName(result)+","+myMethod.getCountryName(result)+"&APPID=4638dc94ad7887e67dc768fd6a6c909c" 
  myMethod.fetch(urlOfWeather,function(result){
// var fiveDay=[];
var x= 0;
for(var i=0;i<result.list.length;i++){
if(result.list[i].dt_txt.includes("15:00:00")){
x+=1;
/////for test only
}

}
console.log(x);
    
  })
})


})