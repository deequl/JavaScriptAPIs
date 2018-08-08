/*
 'this'
  -Can be determined using four rules (global, object/implicit, explicit, new)
*/

//Global Context <--: When 'this' is not inside of a declared object
// console.log(this);  //window
// -Strict Mode to prevent global variables -> "use strict"


//Object/Implicit <--
var person = {
    firstName: "Elie",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    }
}

person.sayHi();  //"Hi Elie"
person.determineContext();

/*
Checkout:
A keyword 'this' is defined when a function is run! There is not
a function being run here to create a new value of the keyword 'this'
so the value of 'this' is still the window!
*/

var person = {
    firstName = "Elie",
    determineContext: this
}

person.determineContext; // window


//Explicit Binding <--
//Choose what we want the context of 'this' to be using (call, apply or bind)
// this methods can only be invoke in functions.

var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
}

//Call//
// -Using call we can fix, dog's this
person.dog.sayHello.call(person); // "Hello Colt"
person.dog.determineContext.call(person); // true

// -Call can help us to refactor to
function sayHi(){
    return "Hi " + this.firstName;
}
var colt = {
    firstName: "Colt",
}
var elie = {
    firstName: "Elie"
}
sayHi.call(colt) // Hi Colt
sayHi.call(elie) // Hi Elie

//We can use call to select all divs that contain 'Hello'
var divs = document.getElementsByTagName('div ');
divs.filter //undefined
var divsArray = [].slice.call(divs);
divsArray.filter(function(val){
    return val.innerText === 'Hello';
})

//Apply//
// -it's very similat to call but, it allows us
//  to pass as second argument an array

function addNumbers(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
}
var colt = {
    firstName: "Colt",
}
var elie = {
    firstName: "Elie"
}
// addNumbers.call(elie, 1, 2, 3, 4) // Elie just calculated 10
addNumbers.apply(elie, [1,2,3,4]) // Elie just calculated 10

// *When a funtion does not accept an array, apply will spread
//  out values in an array for us!
var nums = [5,7,1,4,2];
Math.max(nums) // NaN
Math.max.apply(this, nums); // 7
// or
function sumValues(a,b,c){
    return a+b+c
}
var values = [4,1,2];
sumValues(values); // "4,1,2undefinedundefined"
sumValues.apply(this, [4,1,2]); // 7

//Bind//
// -with bind, we do not need to know all the arguments up front.
var elieCalc = addNumbers.bind(elie,1,2); //function(){}...
elieCalc(3,4); // Elie just calculated 10

// very commonly we lose the context of 'this', but in fucntions that
// we do not want to ececute right away!
// note: that 'this' is inside a setTimeOut function and it's executed in window (global) context

var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }, 1000);
    }
}

colt.sayHi(); // Hi undefined (1000 milliseconds later)

// Use bind to set the correct context of 'this'
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }.bind(this), 1000);
    }
}
colt.sayHi(); // Hi Colt (1000 milliseconds later)

//New <--
// new object is created
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
var elie = new Person("Elie", "Schoppik")
elie.firstName(); // "Elie"
elie.lastName(); // "Schoppik"