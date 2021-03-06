// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x > y) {
    	return x;
    } else {
    	return y;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if (x > y && x > z) {
    	return x;
    } else if (y > x && y > z) {
    	return  y;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

// function betterVowelCheck = function (char) {
// 		var vowels = ["a", "e", "i", "o", "u"]
// 		reurn vowels.includes(char)
// }

function isVowel(char){
    if (char. == "a" || "A") {
    	return true;
    } else if (char == "e" || "E") {
    	return true;
    } else if (char =="i" || "I") {
    	return true;
    } else if (char == "o" || "O") {
    	return true;
    } else if (char == "u" || "U") {
    	return true;
    }
    else {
    	return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
	var handleLetter = function (char) {
      if (char == " ") {
      	return " ";
      } else if (isVowel(char)) {
      	return char;
      } else {
      	return char + "o" + char;
      }
	};

    var charArray = [];
    for(var count = 0; count < phrase.length; count++){
    	var charPush = handleLetter (phrase.charAt(count));
    	charArray.push(charPush);
    }
    return charArray.join("");
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    return string.split("").reverse().join("");
}