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

function caesarCipher(string, keyNumber) {
  const arr = Array.from(string, (eachChar, index) => {
    return string.charCodeAt(index);
  });
  const newArr = arr.map((eachCharCode) => {
    return eachCharCode + keyNumber;
  });
  // print code at each index
  //   for (const eachChar of string) {
  //     console.log(string.charCodeAt(string.indexOf(eachChar)));
  //     arr.push(string.charCodeAt(string.indexOf(eachChar)) + keyNumber);
  //   }

  console.log(arr);
  console.log(newArr);
}

caesarCipher('AbC', 2);
// a: 97; z: 122
// A: 65; Z: 90

// A calculator object
// const calculator = {
//   add(a, b) {
//     return a + b;
//   },

//   substract(a, b) {
//     return a - b;
//   },

//   divide(a, b) {
//     return a / b;
//   },

//   multiply(a, b) {
//     return a * b;
//   },
// };

// module.exports = {
//   capitalizeThis,
//   reverseString,
//   calculator,
// };
