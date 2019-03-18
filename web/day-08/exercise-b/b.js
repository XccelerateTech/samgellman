function informMe (endpoint, value, callback) {
    
    let http = new XMLHttpRequest();
    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`)

    http.onreadystatechange = function() {

        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            callback(http.responseText);
        } else {
            console.log('error occurred' + http.status);
        }
    }

    http.send();

}




// http.open("GET", 'https://restcountries.eu/rest/v2/capital/tallinn', true); 




informMe ('capital', 'london', function(data) {
    console.log(JSON.parse(data));
});










