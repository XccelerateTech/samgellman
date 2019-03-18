class Swimmer {
    constructor(type) {
        this.type = type;
    }

    swim() {
        return("A " + this.type + " can swim.")
    }
}

class Flier {
    constructor(type) {
        this.type = type;
    }

    fly() {
        return("A " + this.type + " can fly.");
    }
}


class Bat {
    constructor(type) {
        this.flier = new Flier(type);
    }

    feed() {
        return("A " + this.flier.type + " is feeding milk.")
    }

    fly() {
        return(this.flier.fly());
    }
}

class Whale {
    constructor(type) {
        this.swimmer = new Swimmer(type);
    }

    feed() {
        return("A " + this.swimmer.type + " is feeding milk.")
    }

    swim() {
        return(this.swimmer.swim());
    }
}

var whale = new Whale('whale');
console.log(whale.swim(), whale.feed()); // A Bat can fly
                                    // A Bat is feeding milk // A Bat can fly
                                    // A Bat is feeding milk