//& Dream Car
/*
& Properties
~ To display a single value from the object this can be done by referring to one of the object's properties
~ A property is the same thing as the key:value pair of the object
*/

//& For example
const stadium = {
    name: 'Dodger Stadium',
    location: 'Los Angeles, CA',
    capacity: 56000,
    soldOut: false
};

//~ Print to the console
console.log(stadium);
console.log();

/*
~ The output:
~ {
    ~ name: 'Dodger Stadium',
    ~ location: 'Los Angeles, CA',
    ~ capacity: 56000,
    ~ soldOut: false
~ }
*/

/*
~ The stadium object has 4 properties:
    ~ .name
    ~ .location
    ~ .capacity
    ~ .soldOut
*/

//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//& Dot Notation
//~ Can access the value of a single property is with a period or dot:
console.log(stadium.name);

//~ As long as the property exists, the value can be accessed. Otherwise, it will be undefined
console.log(stadium.events);

/*
~ The output:
    ~ undefined
*/

//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
& Use the object properties and dot notation to design a dream car!
~ First create a new car object:
    ~ const car = {};

~ Then use the dot notation to add the following properties:
    ~ A .model(string) property, such as 'Tesla' or 'Honda'
    ~ A .year(integer) property for whn the car was made
    ~ A .color(string) property of the car
    ~ A .used(boolean) property that can either be true or false
~ Lastly, log a string message to the console that includes the properties you defined for the car object:
    ~ "I'm looking for a white 2024 Honda that is used."
~ If the .used property is false, the message should say the following:
    ~ "I'm looking for a white 2024 Honda that is new."
*/


//~ This will create a new car object
const car = {
    make: 'Ford',
    model: 'Bronco Heritage Edition',
    year: 2026,
    color: 'black',
    used: false
};

if (car.used === true) {
    console.log("I'm looking for a " + car.color + " " + car.make + " " + car.model + " that is used");
} else {
    console.log("I'm looking for a " + car.color + " " + car.make + " " + car.model + " that is new.");
}
