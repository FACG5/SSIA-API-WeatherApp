var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetch(url, cb) {

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
}



module.exports = fetch;