function reverseWords(sentence) {
    // Split the sentence into an array of words.
    const words = sentence.split(' ');
  
    // Iterate over the array of words and reverse each word.
    const reversedWords = words.map(word => word.split('').reverse().join(''));
  
    // Join the reversed words back into a sentence.
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }

const reversedSentence = reverseWords('This is a sunny day');

console.log(reversedSentence);