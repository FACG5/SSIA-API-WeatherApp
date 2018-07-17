var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports={
 fetch:function(url, cb) {

  var xhr = new XMLHttpRequest();
    xhr.onreadystatechange= function() {
      if (xhr.readyState == 4) {
    
        if(xhr.status == 200){


        var result = JSON.parse(xhr.responseText);
        cb(result);    
      }
      else if (xhr.status == 404){
        var result = JSON.parse(xhr.responseText);

        cb(result)
      }
      else if (xhr.status == 400){
        var result = JSON.parse(xhr.responseText);

        cb(result)
      }
    }
    }
    xhr.open('GET', url, true);
    xhr.send();
},

getName : function (result){  
return result.name;
},

getCountryName : function (result){  
  return result.sys.country;
  },

  getWeatherMain : function (result){  
    return result.weather[0].main;
    },
    getWeatherDescription : function (result){  
      return result.sys.country;
      },
      getWeatherIcon : function (result){  
        return result.sys.country;
        },
}