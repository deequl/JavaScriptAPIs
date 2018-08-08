/*
 Prototypes
*/

function Person(name){
    this.name = name;
}
var elie = new Person("Elie");
elie.__proto__ === Person.prototype

//The Person.prototype object also has aproperty called constructor which
//points back to the function.
Person.prototype.constructor === Person; //True

//Usage
function Person(name){
    this.name = name;
}

//Using prototypes is more efficient than if you do
/*
function Person(name){
    this.name = name;
    this.sayHi = function(){
        return "Hi " + this.name;
    }
}
*/
//It is because now, each object has not to declare the function

Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}

elie = new Person("Elie")
elie.sayHi(); //Hi Elie

