// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
var letter = "";

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	for (var i = 0; i < alphabet.length; i++){

    	letter += alphabet[i];
    	// Then add logic to stackLetters that places a space after every third letter. This will require you to do some basic math in JavaScript, and use an if statement.

    		if ((i + 1) % 3 === 0){
    	letter += " ";}
    	console.log(letter);
    };
};

// Invoke the function and pass in the array
stackLetters(alphabet); 


