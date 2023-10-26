// const findLongestWord = (sentence) => {
//     // Split the sentence into an array of words
//     const words = sentence.split(" ");
//
//     // Initialize a variable to keep track of the longest word
//     let longestWord = "";
//
//     // Iterate through the words in the array
//     for (const word of words) {
//         // Remove any punctuation from the word (optional)
//         const cleanWord = word.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, "");
//
//         // Check if the current word is longer than the current longest word
//         if (cleanWord.length > longestWord.length) {
//             longestWord = cleanWord;
//         }
//     }
//
//     return longestWord;
// };
//  ****jason's code****
const findLongestWord = (sentence) => {
    const sentenceArr = sentence.split(" ");
    let result = "";
    for (let word of sentenceArr) {
        if (word.length > result.length) {
            result = word;
        }
    }
    return result;
};





console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))