class Person {
    constructor(options) {
        this.age = options.age;
        this.name = options.name; 
    }

    info() {
        console.log("The person is called " + this.name + " and is " + this.age + " years old.")
    }

}

const tom = new Person( {age: 44, name: 'Tom' });
tom.info();