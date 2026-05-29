# objects
<!-- & This creates a banner for the ReadMe -->
<img src="img/cherry-blossom-princess.png" alt="Cherry Blossom Princess" width="100%" height="450">

# <p align="center">🌸 Function: JavaScript's Treasure Chest of Data 🌸</p>

## Practice: Storing related data and actions together in neat packages

### Understanding JS -> Teaching programs to bundle values and functions together so it can model real-world things cleanly

<hr>

## <p align="center">💫 Overview</p>
-   [ ] Variables gave my programs memory. Conditionals gave them the power to make decisions. Loops gave them the ability to repeat tasks. Arrays gave them ordered lists. Now objects bring the superpower of structure, the ability to wrao multiple values (and even functions!) into a single named container. Instead of scattering related pieces of data across seperate variables, I can gather them into one object, like putting a book's title's, author, and year into a single `book` variable. This is how we model real-world things in code: a pizza, a stadium, a user, a flight ticket. Clear, maintainable, and expressive.

<hr>

## <p align="center">🎨 Key Design Features</p>
-   [ ] <b>Object Literal</b>
    -   [ ] A comma-seperated list of key-value pairs wrapped in curly braces `{ }`, the simpliest way to create an object
-   [ ] <b>Properties (Key-Value Pairs)</b>
    -   [ ] A property is a named slot inside an object, where the <b>key</b> (or name) points to a <b>value</b> (string, number, boolean, array, even another object)
-   [ ] <b>Dot Notation</b>
    -   [ ] using a period `(.)` after the object's name to access or modify a property, i.e. `stadium.name`
-   [ ] <b>Updating Properties</b>
    -   [ ] Changing the value of an existing property by assigning a new value using dot notation, i.e. `user.verified = true`
-   [ ] <b>Adding New Properties</b>
    - Creating a brand-new property on an existing object with simple assignment, i.e. `fruit.organic = true`
-   [ ] <b>Object Methods</b>
    -   [ ] A function stored as a property. It lets the object do something, like `phone.ringtone()` making a sound
-   [ ] <b>The Method Shorthand</b>
    -   [ ] In modern JavaScript, methodName() {...} can be written inside an object instead of methodName: function() {...}

<hr>

-   [ ] Simple practice to understand how programs can model real-world things
    -   [ ] Scattered variables (like pizzaTopping, pizzaType, pizzaSlices) are messy but objects can group them into one pizza variable.
     -   [ ] Dot notation allows direct access to any property: car.model, user.followers
    -   [ ] Properties are 'live'. They can be updated or new ones can be added anytime
    -   [ ] Methods allow objects to have behavior, not just data: pig.makeSound() printts a personalized message
    -   [ ] Objects are the foundation of almost everything in JavaScript (even arrays and functions are special kinds of objects)

<hr>

## <p align="center">👩🏾‍💻 JavaScript Outline</p>

-   [ ] <b>Creating an Object Literal</b>:
    -   [ ] Using curly braces `{ }` and write key-value pairs separated by commes
    -   [ ] Keys are usually written without quotes (but can be quoted if needed)
        ```javascript
            const book = {
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                year: 1937
            };

            console.log(book);

            /*
            ~ The output:
                {
                    title: 'The Hobbit',
                    author: 'J.R.R. Tolkien',
                    year: 1937
                }
            */
        ```

-   [ ] <b>Why Objects Beat Separate Variables</b>:
    -   [ ] Without objects, each piece of data needs its own variable, tedious and easy to lose
    -   [ ] An object keeps everything together, like a real-world thing
        ```javascript
            //~ Without an object (scattered)
            const pizzaTopping = 'Cheese 🧀';
            const pizzaType = 'Pan';
            const pizzaSlices = 8;
            const pizzaPrice = 12.99;

            //~ With an object (clean & grouped)
            const pizza = {
                topping: 'Pepperoni 🍕',
                type: 'Hand-tossed',
                slices: 12,
                price: 14.99
            };
        ```

-   [ ] <b>Accessing Properties with Dot Notation</b>:
    -   [ ] Write the object name, a dot, then the property name
    -   [ ] If the property does not exist, you get `undefined` (no error)
        ```javascript
            const stadium = {
                name: 'Dodger Stadium',
                location: 'Los Angeles, CA',
                capacity: 56000,
                soldOut: false
            };

            console.log(stadium.name);
            console.log(stadium.capacity);
            console.log(stadium.events);

            /*
            ~ The output:
                ~ Dodger Stadium
                ~ 56000
                ~ undefined
            */
        ```

-   [ ] <b>Updating Existing Properties</b>:
    -   [ ] Just assign a new value to the property using dot notation
        ```javascript
            const user = {
                username: '@emmachamberlain',
                location: 'Los Angeles, CA',
                followers: 15725078,
                following: 3,
                verified: false
            };

            user.verified = true;
            user.location = '🌐';

            console.log(user);

            /*
            ~ The output:
                {
                    username: '@emmachamberlain',
                    location: 'Los Angeles, CA',
                    followers: 15725078,
                    following: 3,
                    verified: true,
                    location: '🌐'
                }
            */
        ```

-   [ ] <b>Adding New Properties</b>:
    -   [ ] Assign a value to a property name that does not exist yet, JavaScript creates it
        ```javascript
            const fruit = {
                name: 'apple',
                quantity: 10
            };

            //~ Adding a new property
            fruit.organic = true;

            console.log(fruit);

            /*
            ~ The output:
                {
                    'apple',
                    10,
                    true
                }
            */
        ```

-   [ ] <b>Object Methods (Functions as Properties)</b>:
    -   [ ] A method is a function stored inside an object. Use it to make the object 'do something'
    -   [ ] Can use the objects own properties inside the method (i.e. `pig.name`)
        ```javascript
            const pig = {
                name: 'Babe',
                type: 'pig',
                age: 5,
                makeSound() {
                    console.log(pig.name + ' is a ' + pig.age + ' year old ' + pig.type + ' that goes Oink, oink, oink!!!');
                }
            };

            pig.makeSound();
            /*
            ~ The output:
                ~ Babe is a 5 year old pig that goes Oink, oink, oink!!!
            */
        ```

-   [ ] <b>Method Shorthand vs. Longer Form</b>:
    -   [ ] Modern JavaScript prefers the shorthand makeSound() {...}
    -   [ ] The older form is makeSound: function() {...} -> both work
        ```javascript
            const phone = {
                model: 'iPhone 17 Pro Max',
                //~ Shorthand method
                ringtone() {
                    console.log('Ring, ring! Ring, ring! 📲');
                }
            };

            phone.ringtone();

            /*
            ~ The output:
                ~ Ring, ring! Ring, ring! 📲
            */
        ```

-   [ ] <b>Using `this` inside Methods</b>:
    -   [ ] Inside a method, `this` refers to the object that own the method
    -   [ ] It is cleaner than hard-oding the object name (i.e. pig.name vs this.name)
        ```javascript
            const sheep = {
                name: 'Mrs. Wool',
                age: 8,
                type: 'sheep',
                makeSound() {
                    //~ 'this' refers to the current object
                    //~ template literal `{}` instead of concatenation
                        //~ Just write the string naturally and drop ${} whenever adding a variables value
                    console.log(`${this.name} is a ${this.age} year old ${this.type} that goes Baaaa, baaaa, baaaa!!!!`);
                }
            };

            sheep.makeSound();

            /*
            ~ The output:
                ~ Mrs. Wool is a 8 year old sheep that goes Baaaa, baaaa, baaaa!!!!
            */
        ```



<hr>

## <p align="center">✨ Encompassed Technologies</p>
-   [ ] <b>JavaScript:</b>
    -   [ ] The programming language that is the magic behind the scenes that makes webpages react, calculate, and come alive. Turning static pages into conversations.
-   [ ] <b>Browser Developer Tools:</b>
    -   [ ] The little laboratory inside browsers likes Chrome and Safari where you can write, test, and debug code without messing up the actual webpage
-   [ ] <b>The Console:</b>
    -   [ ] The dedicated space to output a message and experimentation
-   [ ] <b>VS Code:</b>
    -   [ ] A lightweight but powerful source code editor that provides an integrated terminal, syntax highlighting, and extensions for writing and testing code efficiently
    -   [ ] A digital notebook where all the coding happens.


