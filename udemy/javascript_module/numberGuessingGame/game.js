//create secret number
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");

//check guess is right
if(Number(guess) === secretNumber) {
    alert("You got it right!")
}

//check if guess higher
else if (Number(guess) > secretNumber) {
    alert("Too high, guess again!");
}
//otherwise check if lower
else {
    alert("Too low, guess again!")

}