function reverseWords(sentence) {
  // Split the sentence into words using space as a delimiter
  const words = sentence.split(' ');

  // Reverse the array of words
  const reversedWords = words.reverse();

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example usages:
console.log(reverseWords("fikrcamp bootcamp")); // Output: "bootcamp fikrcamp"
console.log(reverseWords("hello there!")); // Output: "there! hello"
console.log(reverseWords("welcome to my city")); // Output: "city my to welcome"

