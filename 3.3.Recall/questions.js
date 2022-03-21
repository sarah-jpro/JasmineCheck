let selectElementsStartingWithA = (array) => {
    return array.filter((fruit) => fruit.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
}

let removeNullElements = (array) => {
    return array.filter(element => {
        return element !== null;
      });
}

let removeNullAndFalseElements = (array) => {
    return array.filter(e => (e === 0 || e));
}

let reverseWordsInArray = (array) => {
    
   return array.map(word => word.split("").reverse().join(""));
   
}

let everyPossiblePair = (array) => {
    
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3,);
}

let addElementToBeginning = (array, element) => {
    return 
}
let sortByLastLetter = (array) => {
    return 
}

let getFirstHalf = (string) => {
    
        if (string.length % 2 == 0) {
          return string.slice(0, string.length / 2);
        }
        return string;
      
          
}

let makeNegative = (number) => {
    return 'Write your method here';
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
