function isPalindrome(word) {
  // Write your algorithm here
  return word.split("").reverse().join("") === word ? true : false;
}

/* 
  Add your pseudocode here
  1. Split the input string
  2. Use the built in reverse method to reverse the resulting string after split
  3. Use the built in join function to to create a string from the array.
  4. check whether the resulting string is exactly the same as the input word
  5. return a boolean that indicates whether the string is a  palindrom(true) or not(false)
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
