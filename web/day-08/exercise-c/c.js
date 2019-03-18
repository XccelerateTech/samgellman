function whoIsInSpace (callback) {
    
    let http = new XMLHttpRequest();
    http.open('GET', `http://api.open-notify.org/astros.json`);
    var astros; 

    http.onreadystatechange = function() {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;

        } else if (http.status == 200) {
            
            astros = JSON.parse(http.responseText);
            console.log(astros);

            var array = [];

            for (var i = 0; i < astros.people.length; i++) {
                array[i] = astros.people[i].name;
            }

            callback(array);

        } else {

            console.log('error occurred' + http.status);
        
        }
    }

    http.send();


}

whoIsInSpace(function(data) {
    console.log(data + 'happy')
});










