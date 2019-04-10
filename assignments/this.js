/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayWho (name) {
    console.log(this);
    return name;
}

sayWho("Peter-Parker"); 

// Principle 2
const Jax = {
    greeting: 'Why?',
    sayWhy: function(name) {
        console.log(`${this.greeting} would you attack me, ${name}`);
        console.log(this);
    }
};
Jax.sayWhy('Emilio');
// code example for Implicit Binding

// Principle 3
function PlayerLocation(aggression) {
    this.anger = 'Who dares to enter ';
    this.aggression = aggression;
    this.speak = function() {
        console.log(this.anger + this.eggression);
        console.log(this);
    };
}

const house = new PlayerLocation('My Home');
const tower = new PlayerLocation('My Tower');
const lair = new PlayerLocation('lair'); 
// code example for New Binding

// Principle 4

// code example for Explicit Binding