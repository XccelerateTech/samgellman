class User {
    constructor(options) {
        this.firstname = options.firstname;
        this.lastname = options.lastname;
        this.email = options.email;
        this.dob = options.dob; 
    }

    info() {
        console.log("The person is called " + this.firstname + " " + this.lastname + " and can be reached at " 
        + this.email + " and was born on " + this.dob)
    }

}

//const tom = new Person( {age: 44, name: 'Tom' });
//tom.info();


function createRandomUsers (totalUsers, callback) {
    
    let http = new XMLHttpRequest();
    http.open('GET', `https://randomuser.me/api/?results=${totalUsers}`);

    var userResponse; 

    http.onreadystatechange = function() {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;

        } else if (http.status == 200) {
            
            userResponse = JSON.parse(http.responseText);

            callback(userResponse.results);

        } else {

            console.log('error occurred' + http.status);
        
        }
    }

    http.send();
}

var totalUsers = 5; 

createRandomUsers(totalUsers, function(data) {
    
    var userArray = [];

    for (var i = 0; i < totalUsers; i++) {
        userArray.push(new User({firstname: data[i].name.first, lastname: data[i].name.last, 
            email: data[i].email, dob: data[i].dob}));
    }
    
    console.log(userArray);
    
});

    














