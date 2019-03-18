class Person {
    constructor(options) {
        this.age = options.age;
        this.name = options.name; 
    }

    info() {
        console.log("The person is called " + this.name + " and is " + this.age + " years old.")
    }

}


class Student extends Person {
    constructor(options) {
        super(options);
        this.gpa = Number(options.gpa).toFixed(1); 
    }

    info() {
        console.log("The person is called " + this.name + " and is " + this.age + " years old.  He has an overall GPA of " + this.gpa + ".")
    }

}

const tom = new Student( {age: 44, name: 'Tom', gpa: 4.0 });
tom.info();
