let sentence = prompt("this is algo checkpoint.");
let words = sentence.split(" ");
let sentenceLength = sentence.length;
let numWords = words.length;
let numVowels = 0;
for (let i = 0; i < sentenceLength; i++) {
  let letter = sentence[i].toLowerCase();
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    numVowels++;
  }
}

console.log(`Length of sentence: ${sentenceLength}`);
console.log(`Number of words: ${numWords}`);
console.log(`Number of vowels: ${numVowels}`);
