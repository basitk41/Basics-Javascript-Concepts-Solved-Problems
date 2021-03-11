// Problem 2:- Write a program to combine two arrays...........................................
const inputFirst  = [1,2,3];                      // first array 
const inputSecond = [4,5,6];                      // Second array
for(let value of inputSecond){                  // for loop for getting elements of second array
    inputFirst.push(value);                    // pushing that element to first array
}                                          //
console.log('Problem 2 solution',inputFirst);  // Output => [1,2,3,4,5,6]