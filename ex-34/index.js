//& Pizza Party
/*
& Objects
~ In reality everything around you is an object wih certain traits and possible behaviors
~ Some of JavaScripts core data types include numbers and strings. Objects are one of those data types
~ Objects are used for storing multiple values in a single variable. They are usually key:value pairs where the key and the value are seperated by a : colon sign

& Example of object syntax
~ object = {
    ~ key1: value1,
    ~ key2: value2,
    ~ key3: value3
~}
*/

//& Another example
const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937
}

//~ Print book object to the console
console.log(book);
console.log();

/*
~ The output:
~ {
    ~ title: 'The Hobbit',
    ~ author: 'J.R.R. Tolkien',
    ~ year: 1937
~ }
*/

//~ It is possible to store methods inside of objects

//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//& Demonstrate the usefulness of objects using two pizzas:
//~ Pizza 1
const pizzaTopping = 'Cheese 🧀';
const pizzaType = 'Pan';
const pizzaSlices = 8;
const pizzaPrice = 12.99;

//~ Print to the console
console.log(pizzaTopping);
console.log(pizzaType);
console.log(pizzaSlices);
console.log(pizzaPrice);
console.log();

/*
~ The output:
    ~ Cheese 🧀
    ~ Pan
    ~ 8
    ~ 12.99
*/

//~ Usefulness of an object
const pizza = {
    topping: 'Pepperoni 🍕',
    type: 'Hand-tossed',
    slices: 12,
    price: 14.99
}

//~ Print to the console
console.log(pizza);

/*
~ The output:
~ {
    ~ topping: 'Pepperoni 🍕',
    ~ type: 'Hand-tossed',
    ~ slices: 12,
    ~ price: 14.99
~ }
*/

/*
~ From the code above it is possible to define each piece of data in its own variable, but objects make it easier to organize this data into a single collection and store it in a single variable
*/
