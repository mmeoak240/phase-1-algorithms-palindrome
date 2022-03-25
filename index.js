function isPalindrome(word) {
  const str = word;
  const strArray = [...str]
  const newWord = wordReverse(strArray)

  if(word === newWord) {
    return true
  } else {
    return false
  }
}

// function arrayMaker(word) {
// const str = word;
// const strArray = [...str]
// console.log(strArray)
// wordReverse(strArray)
// }

function wordReverse(letters) {
const reversedWord = letters.reverse()
const finishedWord = reversedWord.join("")
return finishedWord
}

// isPalindrome('mome')


/* 
  Add your pseudocode here
  isPalindrome() takes in a string.
  assign variable to wordReverse() whos that return value is the string reversed.
  write an if statement that if argument passed into IsPalindrome is equal to retunred value of wordReverse, return true
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
