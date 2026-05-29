//& Round Tip
/*
~ Understanding objects:
    ~ What objects are and why they're useful
    ~ How to access object properties through dot notation
    ~ How to change existing properties and create new ones
    ~ How to write and use functions, or objects methods, as properties
*/

/*
& Is there a place you've always wanted to fly to?
~ Build two objects for boarding passes for a round trip:
    ~ 🛫 departTripTicket
    ~ 🛬 returnTripTicket
~ Both objects should have the following properties:
    ~ .name for the passenger
    ~ .from for where the passenger is flying from
    ~ .to for where the passenger is flying to
    ~ .businessClass boolean value for whether it's in business class (true/false)
    ~ .upgrade() method changes the .businessClass property to true or prints a message if false (i.e. 'Your ticket is already business class!')

~ After creating these objects, use the .upgrade() method on at least one of them and then log both objects to the console

~ Bonus: An extra challenge.
    ~ Add a .leaveTime and .arriveTime property to both objects (integers 1-24)
    ~ The define a .flightTime() method property that calculates and prints the travel time with the .leaveTime and .arrivalTime properties
*/

//~ Build two objects for boarding passes for a round trip

const departTripTicket = {
    name: 'Etaria L33',
    from: 'Queens, NY',
    to: 'Seoul, KOR',
    businessClass: false,
    upgrade() {
        if (departTripTicket.businessClass === true) {
            console.log('Your ticket is already business class!');
        } else {
            departTripTicket.businessClass = true;
            console.log(departTripTicket);
        }
    },
};

const returnTripTicket = {
    name: 'Etaria L33',
    from: 'Seoul, KOR',
    to: 'Queens, NY',
    businessClass: true,
    upgrade() {
        if (returnTripTicket.businessClass === true) {
            console.log('Your ticket is already business class!');
        } else {
            returnTripTicket.businessClass = true;
            console.log(returnTripTicket);
        }
    },
};

//~ Log the depart object
// console.log(departTripTicket);
// console.log();

//~ Call the method
// departTripTicket.upgrade();
// console.log();

//~ Log the return object
// console.log(returnTripTicket);
// console.log();

//~ Call the method
// returnTripTicket.upgrade();

//& Bonus
//~ Add .leaveTime and .arrivalTime properties (integers 1 - 24) to both objects

departTripTicket.leaveTime = 3;
departTripTicket.arrivalTime = 12;

//~ Log to the console
// console.log(departTripTicket);
// console.log();
// console.log('You have been upgraded to Business Class:');
// departTripTicket.upgrade();
// console.log();

returnTripTicket.leaveTime = 15;
returnTripTicket.arrivalTime = 1;

//~ Log to the console
// console.log(returnTripTicket);
// console.log();
// console.log('You have the correct upgrade:');
// returnTripTicket.upgrade();

//~ Define a .flightTime() method property that calculates and prints the travel time with the .leaveTime and .arrivalTime properties

departTripTicket.flightTime = function flightTime() {
    let travelTime = departTripTicket.leaveTime + departTripTicket.arrivalTime;
    console.log('The travel time for this trip is: ' + travelTime + ' hours');
};

//~ Log to the console
console.log('The departure trip Ticket inforamtion:');
console.log(departTripTicket);
console.log();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log();
console.log('You have been upgraded to Business Class:');
departTripTicket.upgrade();
departTripTicket.flightTime();
console.log();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log();


returnTripTicket.flightTime = function flightTime() {
    let travelTime2 = returnTripTicket.leaveTime + returnTripTicket.arrivalTime;
    console.log('The travel time for this trip is: ' + travelTime2 + ' hours');
}

//~ Log to the console
console.log('The return trip Ticket inforamtion:');
console.log(returnTripTicket);
console.log();
console.log('You have the correct upgrade:');
returnTripTicket.upgrade();
returnTripTicket.flightTime();
