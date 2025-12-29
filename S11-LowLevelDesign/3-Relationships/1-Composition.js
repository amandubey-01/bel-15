// Composition
// Has a relationship (Strong)
class Heart {
    beat() {
        setInterval(() => {
            console.log('The heart is beating');
        }, 1000)
    }
}

class Human {
    #heart

    constructor(){
        this.#heart = new Heart(); // If we write code in this way when the bigger class (Human) entirely owning
        // the small class (Heart) 
    }

    // walk, talk
}

// By owning we mean that when we instantiate the bigger class the small class gets instantiated automatically
// and when the object gets destroyed the instance of Heart also goes forever.
// This ownership means that the lifespan and existence of the part are entirely dependent on the whole.
// This is a strong realtionshiop where one of the class is owned by another class. This is not a parent child 
// relationship, we are not inheriting we are owning the other class.
const jay = new Human