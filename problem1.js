// Problem 1:- Write a program to reverse an array or string using loop.
const input = [1,2,6,3];                  // original array
const output = [];                        // output empty array
for(let i=0;i<input.length;i++){          // for loop with equal iteration to length of array
   let element = input[i];                      // assigning elements to x variable one by one
   output.unshift(element);                     // putting x at start of array each time
}                                          //
console.log('Problem 1 solution',output); // Output => [3,6,2,1]
                                    