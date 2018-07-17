
function fetch(url, cb) {
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange= function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const result = JSON.parse(xhr.responseText);
        cb(result);    
      }
    }
    xhr.open('GET', url, true);
    xhr.send();
}


module.exports = fetch;