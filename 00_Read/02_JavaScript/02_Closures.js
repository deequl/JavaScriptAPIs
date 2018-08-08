/*
 Closures
  -only variables used in the inner function are remembered
  -closures dont remember everything from an outer function
   just the variables they need!
*/

//Private Variables
// -the counter is independent in var counter1 = counter() and
//  another var counter2 = counter()
function counter(){
    var count = 0;
    return function inner(){
        count++;
        return count;
    }
}

//More Privacy
function classRoom(){
    var instructors = ["Elie", "Joel"]
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

var first = classRoom()
first.addInstructor("Mayle")
first.getInstructors()

var second = classRoom()
second.getInstructors() //independent of first.getInstructors


/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
    if(arguments.length === 1){
        return function(b){
            return a*b;
        }
    }
    return a*b;
}

/*
Guessing Game

Examples: 

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
    
*/

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed){
            guesses++
            if(guess === answer){
                completed = true;
                return "You got it!"
            }
            else if(guess > answer) return "Your guess is too high!"
            else if(guess < answer) return "Your guess is too low!"
            else if(guesses === amount){
                completed = true;
                return "No more guesses the answer was " + answer;
            }
        }
        return "All done playing!"
    }
}