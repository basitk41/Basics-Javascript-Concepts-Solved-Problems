function zero() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 0;
  }
}
function one() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 1;
  }
}
function two() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 2;
  }
}
function three() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 3;
  }
}
function four() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 4;
  }
}
function five() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 5;
  }
}
function six() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 6;
  }
}
function seven() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 7;
  }
}
function eight() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 8;
  }
}
function nine() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += 9;
  }
}
function point() {
  let zero = document.getElementById("cal");
  let a = zero.value.toString();
  if (a[a.length - 1] === ")") {
  } else {
    zero.value += ".";
  }
}
function reset() {
  let zero = document.getElementById("cal");
  ppp = 0;
  zero.value = "";
}
// function plus() {
//   let zero = document.getElementById("cal");
//   input1 = zero.value;
//   let a = input1.indexOf("+");
//   if (a !== -1) {
//     let index = input1.indexOf("+");
//     let first = input1.slice(0, index);
//     let last = input1.slice(index);
//     let sum = +first + +last;
//     zero.value = sum + "+";
//   } else {
//     zero.value += "+";
//   }
// }
// function equal() {
//   let zero = document.getElementById("cal");
//   input2 = zero.value;
//   let index = input2.indexOf("+");
//   let first = input2.slice(0, index);
//   let last = input2.slice(index);

//   let sum = +first + +last;
//   zero.value = sum;
// }
function back() {
  let zero = document.getElementById("cal");
  let b = zero.value.toString();
  if (b[b.length - 1] === ")") {
    ppp++;
  } else if (b[b.length - 1] === "(") {
    ppp--;
  }
  input3 = zero.value;
  let a = input3.substring(0, input3.length - 1);
  zero.value = a;
}
// function minus() {
//   let zero = document.getElementById("cal");
//   input1 = zero.value;
//   let a = input1.indexOf("-");
//   if (input1[0] === "-") {
//     if (input1.lastIndexOf("-") !== -1) {
//       input1 = input1.substring(1);
//       let index = input1.indexOf("-");
//       let first = input1.slice(1, index);
//       let last = input1.slice(index);
//       let sum = +first - -last;
//       zero.value = sum + "-";
//     }
//   } else if (a !== -1) {
//     let index = input1.indexOf("-");
//     let first = input1.slice(0, index);
//     let last = input1.slice(index);
//     let sum = +first - -last;
//     zero.value = sum + "-";
//   } else {
//     zero.value += "-";
//   }
// }
// let a = "2+";
// console.log(a.indexOf("3"));
// console.log();
// plus start
function plus() {
  let zero = document.getElementById("cal");
  let array = [];
  let a = zero.value.toString();
  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }

  if (array[array.length - 1] === "+" || array.length === 0) {
  } else if (
    array[array.length - 1] === "-" ||
    array[array.length - 1] === "*" ||
    array[array.length - 1] === "/"
  ) {
    zero.value = a.substring(0, a.length - 1);
    zero.value += "+";
  } else {
    zero.value += "+";
  }
}
// plus end

// minus start

function minus() {
  let zero = document.getElementById("cal");
  let array = [];
  let a = zero.value.toString();
  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }

  if (array[array.length - 1] === "-") {
  } else if (
    array[array.length - 1] === "+" ||
    array[array.length - 1] === "*" ||
    array[array.length - 1] === "/"
  ) {
    zero.value = a.substring(0, a.length - 1);
    zero.value += "-";
  } else {
    zero.value += "-";
  }
}

// minus end
function dot() {
  let zero = document.getElementById("cal");
  let array = [];
  let a = zero.value.toString();
  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }

  if (array[array.length - 1] === "*" || array.length === 0) {
  } else if (
    array[array.length - 1] === "+" ||
    array[array.length - 1] === "-" ||
    array[array.length - 1] === "/"
  ) {
    zero.value = a.substring(0, a.length - 1);
    zero.value += "*";
  } else {
    zero.value += "*";
  }
}
function divide() {
  let zero = document.getElementById("cal");
  let array = [];
  let a = zero.value.toString();
  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }

  if (array[array.length - 1] === "/" || array.length === 0) {
    //do nothing...
  } else if (
    array[array.length - 1] === "+" ||
    array[array.length - 1] === "*" ||
    array[array.length - 1] === "-"
  ) {
    zero.value = a.substring(0, a.length - 1);
    zero.value += "/";
  } else {
    zero.value += "/";
  }
}

let ppp = 0;
function pp() {
  let zero = document.getElementById("cal");
  let array = [];
  let a = zero.value.toString();

  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }

  if (array[array.length - 1] === ")" || array.length === 0) {
    //do nothing...
  } else if (ppp) {
    zero.value += ")";
    ppp--;
  } else {
  }
}

function cc() {
  let zero = document.getElementById("cal");
  let array = [];
  let a = zero.value.toString();
  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }
  if (
    array[array.length - 1] === "(" ||
    array[array.length - 1] === ")" ||
    array[array.length - 1] === "0" ||
    array[array.length - 1] === "1" ||
    array[array.length - 1] === "2" ||
    array[array.length - 1] === "3" ||
    array[array.length - 1] === "4" ||
    array[array.length - 1] === "5" ||
    array[array.length - 1] === "6" ||
    array[array.length - 1] === "7" ||
    array[array.length - 1] === "8" ||
    array[array.length - 1] === "9"
  ) {
    //do nothing...
  } else {
    zero.value += "(";
    ppp++;
  }
}

function equal() {
  let zero = document.getElementById("cal");
  //let array = [];

  let a = "(" + zero.value + ")";
  console.log("a");
  console.log(typeof a);

  let operands = [];
  let operators = [];
  let expArray = a.split("");
  console.log(expArray);
  let expB = [];
  let nn = "";
  for (let i = 0; i < expArray.length; i++) {
    if (!isNaN(expArray[i])) {
      if (expArray[i - 1] === "-") {
        nn += "-";
      }
      nn += expArray[i];
      if (isNaN(expArray[i + 1])) {
        expB.push(nn);
        nn = "";
      }
    } else if (isNaN(expArray[i])) {
      expB.push(expArray[i]);
    }
  }
  if (expB[1] === "-") {
    expB.splice(1, 1);
    //expB.splice(1, 1, "-" + expB[1]);
  }
  console.log("exp b", expB);
  console.log("exp b nn", nn);
  let result;
  //let numbers = "";
  console.log(expArray);
  expB.forEach((currentValue, index) => {
    if (currentValue != " ") {
      console.log(currentValue, index);
      if (!isNaN(currentValue)) {
        // if (isNaN(expArray[index + 1])) {
        //   numbers += currentValue;
        //   console.log("numbers", numbers);
        // }
        // if (!isNaN(expArray[index + 1])) {
        //   operands.push(currentValue);
        //   numbers = "";
        // }
        operands.push(currentValue);
      } else if (
        currentValue === "+" ||
        currentValue === "-" ||
        currentValue === "/" ||
        currentValue === "*"
      ) {
        operators.push(currentValue);
      } else if (currentValue === ")") {
        while (operators.length > 0) {
          let firstValue = parseFloat(operands.pop());
          let secondValue = parseFloat(operands.pop());
          console.log("firstValue");
          console.log(firstValue);
          console.log(secondValue);
          let operator = operators.pop();

          if (operator === "+") {
            result = firstValue + secondValue;
          } else if (operator === "-") {
            if (firstValue < 0 || (secondValue < 0 && firstValue > 0)) {
              result = secondValue + firstValue;
            } else {
              result = secondValue - firstValue;
            }
          } else if (operator === "/") {
            result = secondValue / firstValue;
          } else if (operator === "*") {
            result = firstValue * secondValue;
          }

          operands.push(result);
        }
      }
    }
  });
  console.log("opearnds");
  console.log(operands);
  console.log("operators");
  console.log(operators);

  // let result = eval(a);
  zero.value = operands.pop();
}

// go = () => {
//   let a = "(2+(3+4))";
//   let b = a.split("");
//   let operand = [];
//   let operator = [];
//   let result;
//   b.forEach((c, i) => {
//     if (!isNaN(c)) {
//       operand.push(c);
//     } else if (c !== ")") {
//       operator.push(c);
//     }
//     console.log(c);
//     if (c === ")") {
//       while ("(" == operator.pop) {
//         let x = parseFloat(operand.pop());
//         let y = parseFloat(operand.pop());
//         let z = operator.pop();
//         if (z === "+") {
//           result = x + y;
//         }
//         operand.push(result);
//       }
//     }
//   });
//   console.log(operand);
//   console.log(operator);
// };
// go();

let a = "1+2";
console.log(a);
