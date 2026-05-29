/*
& Using a Template Literal (or template string)
~ template literal `{}` instead of concatenation
    ~ Just write the string naturally and drop ${} whenever adding a variables value
~ Instead of using quotes ' ' or " ", you use backticks ` to create a string. Inside those backticks, you can insert variables or expressions using ${ } and JavaScript will evaluate them and replace the whole ${...} with their value.
*/

/*
& Let's go to the farm! Look at all the animals! 👩🏾‍🌾
~ Create three objects for three farm animals: pig, sheep, and dog
~ Each object should have the following properties:
    ~ A .name, set to a string
    ~ A .type, set to a string of either 'pig', 'sheep', or 'dog'
    ~ An .age, set to an integer
    ~ A .makeSound() method tthat returns a string of the sound it makes (specific to the animal)
~ The .makeSound() method should return a string featuring the other properties, and looks like the following:
~ 'Benny is a 10 year old dog that goes woof!'
*/
//& Three objects for farm animals: pig, sheep, & dog
//~ The pig object
const pig = {
    name: 'Babe',
    type: 'pig',
    age: 5,
    makeSound() {
        console.log(
            `${pig.name} is a ${this.age} year old ${this.type} that goes Oink, oink, oink!!!`
        );
    },
};

//~ Log to the console
console.log(pig);
//~ Call the method
pig.makeSound();
console.log();

//~ The sheep object
const sheep = {
    name: 'Mrs. Wool',
    type: 'sheep',
    age: 8,
    makeSound() {
        console.log(
            `${this.name} is a ${this.age} year old ${this.type} that goes Baaaa, baaaa, baaaa!!!!`,
        );
    },
};

//~ Log to the console
console.log(sheep);
//~ Call the method
sheep.makeSound();
console.log();

//~ The dog object
const dog = {
    name: 'Boscoe',
    type: 'dog',
    age: 10,
    makeSound() {
        console.log(
            `${this.name} is a ${this.age} year old ${this.type} that goes Woof, woof, wooofff!!!`
        );
    },
};

//~ Log to the console
console.log(dog);
//~ Call the method
dog.makeSound();
