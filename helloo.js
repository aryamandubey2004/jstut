var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
const jooke = getRandomJoke.body;

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : jooke,
    e : "oO",
    T : "U "
}));

// or cowsay.think()