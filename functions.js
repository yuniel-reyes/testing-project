function capitalizeThis(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let newString = '';
  for (const eachChar of string) {
    newString += string.substr(-(string.indexOf(eachChar) + 1), 1);
  }
  return newString;
}

// A calculator object
const calculator = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

function shiftLower(eachChar, keyNumber, newArr) {
  // a = 97 | z = 122
  let letter = eachChar.charCodeAt(0);
  letter += keyNumber % 26;
  // if letter > 122, letter - 122, result + 97
  if (letter > 122) {
    letter = letter - 123 + 97;
  }
  // letter = 97 + (-13) = 84
  // if letter < 97, letter, (97 - letter)
  // 122 - (97 - letter) + 1
  if (letter < 97) {
    letter = 122 - (97 - letter) + 1;
  }
  letter = String.fromCharCode(letter);
  newArr.push(letter);
}

function shiftUpper(eachChar, keyNumber, newArr) {
  // A = 65 | Z = 90
  let letter = eachChar.charCodeAt(0);
  letter += keyNumber % 26;
  // if letter > 90, letter - 11, result + 65
  if (letter > 90) {
    letter = letter - 91 + 65;
  }
  if (letter < 65) {
    letter = 90 - (65 - letter) + 1;
  }

  letter = String.fromCharCode(letter);
  newArr.push(letter);
}

function caesarCipher(string, keyNumber) {
  // convert to array
  const arrFromAString = Array.from(string);
  const newArr = [];

  // Filter letter
  arrFromAString.forEach((eachChar) => {
    if (/[a-zA-Z]/.test(eachChar)) {
      // check if letter is upper or lower
      // if a.toUpperCase() === a = false
      if (eachChar.toUpperCase() === eachChar) {
        // get upper letters
        shiftUpper(eachChar, keyNumber, newArr);
      } else {
        shiftLower(eachChar, keyNumber, newArr);
      }
    } else {
      newArr.push(eachChar);
    }
  });
  let newString = newArr.join('');
  return newString;
}

// analyze array
function analyzeArray(array) {
  let average =
    array.reduce((sum, next) => {
      return (sum += next);
    }, 0) / array.length;

  const min = array.sort((prev, next) => {
    return prev - next;
  })[0];

  const max = array.sort((prev, next) => {
    return next - prev;
  })[0];

  const theLength = array.length;
  average = Math.trunc(average);

  return { average, min, max, theLength };
}

module.exports = {
  capitalizeThis,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
