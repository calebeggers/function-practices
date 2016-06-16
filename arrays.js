// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number 
// getLargestNumber(numbers)
// ---------------------------

function getLargestNumber (numArray) {
  return Math.max.apply(null, numArray);
}


// ---------------------------
// 2. Find longest string
// ---------------------------
function getLongestString (stringArray) {
	var longest = "";
	for (var i = 0; i < stringArray.length; i++) {
		if (longest.length < stringArray[i].length) {
	   		longest = stringArray[i];
	  }
	}
	return longest
}

// ---------------------------
// 3. Find even numbers
// ---------------------------



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function findIs (string) {
	return string.includes ("is");
}

// ---------------------------
// 5. Join Both Arrays Together
// numbersWithStrings
// ---------------------------

var numbersWithStrings = numbers.concat(strings)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------