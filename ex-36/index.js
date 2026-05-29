//& Pokémon

/*
& Updating Properties
~ For objects, an existing property can be changed and assigned a new value
*/
const user = {
    username: '@emmachamberlain',
    location: 'Los Angeles, CA',
    followers: 15725078,
    following: 3,
    verified: false
};

//~ Log to the console
console.log(user);
console.log();


/*
~ The output:
    ~ {
        ~ username: '@emmachamberlain',
        ~ location: 'Los Angeles, CA',
        ~ followers: 15725078,
        ~ following: 3,
        ~ verified: false
    ~ }
*/

user.verified = true;
user.location = '🌐'

//~ Log to the console
console.log(user);
console.log();


//~ The user got verified and updated their location.

//& Adding New Properties
//~ Another way to add a brand new property to an existing object is using the dot notation
const fruit = {
    name: 'apple',
    quantity: 10
};

//~ Log to the console
console.log(fruit);

/*
~ The output:
    ~ {
        ~ name: 'apple',
        ~ quantity: 10
    ~ }
*/

//~ Can create and assign a new property to it
fruit.organic = true;

console.log(fruit);
console.log();

/*
~ The output:
    ~ {
        ~ name: 'apple',
        ~ quantity: 10,
        ~ organic: true
    ~ }
*/

//& Practice adding and updating properties with the following pokemon object:
pokemon = {
    name: 'Pikachu',
    type: 'Electric ⚡️',
    level: 25
}
console.log(pokemon);

/*
~ First, define a new .isCaught property with a value of false
~ Next, log the pokemon object to ensure the new property was added
~ Yay! You caught the Pokémon! Change the following properties:
    ~ 1. Change .isCaught to true
    ~ 2.  Nickname your newly caught Pokémon by changing the value of name
~ Finally, log the updated Pokémon object to the console.
*/

pokemon.isCaught = false;
console.log(pokemon);

//~ Caught the Pokémon
pokemon.isCaught = true;
pokemon.name = 'Pika';

console.log(pokemon);
