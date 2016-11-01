//initial excercise: random number changes on every refresh
/* var userInput = prompt("enter a number between 1-10");

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}

var computerNumber = randomNumber();

if (parseInt(userInput)>10||parseInt(userInput)<=0) {
	console.log("that is not a number between 1 and 10.")
} else if (computerNumber===parseInt(userInput)) {
	console.log(computerNumber+", nice work");
} else if (computerNumber > parseInt(userInput)) {
	console.log("nope, too low");
} else {
	console.log("nope, too high")
}*/


//bonus: random number stays the same until it's guessed; generated again when page is refreshed
function randomNumber() {
	return Math.floor((Math.random() * 10) + 1);
}
var computerNumber = randomNumber();
var userInput;

function response() {
	if (parseInt(userInput)>10||parseInt(userInput)<=0) {
		console.log("that is not a number between 1 and 10.")
	} else if (computerNumber===parseInt(userInput)) {
		console.log(computerNumber+", nice work");
	} else if (computerNumber > parseInt(userInput)) {
		console.log("nope, too low");
	} else {
		console.log("nope, too high")
	}
}

do {
	userInput = prompt("enter a number between 1-10");
	response();
} while (computerNumber !== parseInt(userInput));