class Flier {
    constructor(options) {
        this.type = options.type;
    }

    fly() {
        return("A " + this.type + " can fly.");
    }
}

class Swimmer {
    constructor(options) {
        this.type = options.type;
    }

    swim() {
        return("A " + this.type + " can swim.")
    }
}


class Bat extends Flier {
    constructor (options) {
        super(options);
    }

    feed() {
        return("A " + this.type + " is feeding milk.")
    }
}

class Whale extends Swimmer {
    constructor (options) {
        super(options);
    }

    feed() {
        return("A " + this.type + " is feeding milk.")
    }
}

class Bird extends Flier {
    constructor (options) {
        super(options);
    }

    lay() {
        return("A " + this.type + " is laying eggs.")
    }
}

class Fish extends Swimmer {
    constructor (options) {
        super(options);
    }

    lay() {
        return("A " + this.type + " is laying eggs.")
    }
}

var bat = new Bat({type: 'Bat'});

console.log(bat.fly(), bat.feed()); // A Bat can fly
                                    // A Bat is feeding milk // A Bat can fly
                                    // A Bat is feeding milk