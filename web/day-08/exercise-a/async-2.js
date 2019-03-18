var http = new XMLHttpRequest();

http.open('GET', './data.json');

http.onreadystatechange = function() {

    if(http.readyState != XMLHttpRequest.DONE) {

        return;

    } else if(http.status == 200) {
        console.log('see the response text here');
        let newData = JSON.parse(http.responseText);
        console.log(http.responseText);
        console.log(newData);
//        var newData = JSON.parse(http.responseText);

    } else {
        console.log('error occurred' + http.status);
    }

}

http.send();

