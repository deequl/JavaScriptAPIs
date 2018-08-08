/*
 Inheritance
 - The passing of methods and properties from one clss to another
 -redefine functions only ones
*/

function Student(firstName, lastName){
    return personalbar.apply(this, arguments);
}

Student.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor; //Person
Student.prototype.constructor = Student
