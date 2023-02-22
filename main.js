let array = [0, 1];
let storedNum = 0;
let num1 = 0;
let lastTwo = [0, 1];

// Take a number and return an array containing that many numbers from the FS
function fibsNonRec(num) {
  for (let i = 0; i < num; i++) {
    for (let n = 0; n < 1; n++) {
      num1 = lastTwo[n];
      storedNum += num1;
      array.push(storedNum);
      lastTwo = array.slice(Math.max(array.length - 2, 0));
    }
  }
  array.splice(0, 2);
  return array;
}


const eight = fibsNonRec(8);
console.log(eight);

// 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13
// add the last two numbers of an array together
// then, add the result to an array
// repeat

  array = [0, 1];
  let secondToLast = 0;
  let last = 1;
  let result = 0;

function fibsRec(num) {
  if (num <= 2) {
    return array;
  }
  last = array.slice(-1);
  last = parseInt(last);

  secondToLast = array.slice(-2);
  secondToLast = parseInt(secondToLast);

  result = secondToLast + last;
  array.push(result);
  return fibsRec(num - 1);
}

const eightRec = fibsRec(8);
console.log(eightRec);
