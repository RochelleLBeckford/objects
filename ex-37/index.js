//& Animal Farm

/*
& Object Methods
~ In addition to housing raw data values, objects can also store functions as values.
~ A function that is inside an object is referred to as a method.
~ The following phone object that featues a ringtone property
*/

const phone = {
    model: 'iPhone 17 Pro Max',
    brand: 'Apple',
    version: 16.6,
    owner: 'Etaria L33',
    ringtone: function () {
        console.log('Ring, ring! Ring ring!');
    }
};

//~ Call the ringtone key to run the ringtone method
phone.ringtone();
console.log();

//~ When log the object, the key with ringtone shows that it has a method but not what the value of that method is
console.log(phone);
console.log();

/*
~ The ringtone property is a method and you tell it by the use of the function keyword, with parentheses
~ The syntax is a little weird (function() {...}). The method's name is the same as the property name!
~ In objects methods can be stored another way
*/
const phone2 = {
    model: 'Android',
    brand: 'Samsung',
    version: 16.1,
    owner: 'Jane Doe',
    ringtone() {
        console.log('Ring, ring! Ring, ring! 📲');
    }
};

//~ Call the ringtone() method
phone2.ringtone();
console.log();

/*
~ Here, sort of combining the key:vale pair into one statement for the ringtone() method.
~ Note: The key:value pair is still there. ringtone is the key and the method body() {...} is the value.
*/

//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
        console.log(pig.name + ' is a ' + pig.age + ' year old ' + pig.type + ' that goes Oink, oink, oink!!!');
    }
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
        console.log(sheep.name + ' is a ' + sheep.age + ' year old ' + sheep.type + ' that goes Baaa, baaa, baaaa!!!');
    }
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
        console.log(dog.name + ' is a ' + dog.age + ' year old ' + dog.type + ' that goes Woof, woof, wooofff!!!');
    }
};

//~ Log to the console
console.log(dog);
//~ Call the method
dog.makeSound();
