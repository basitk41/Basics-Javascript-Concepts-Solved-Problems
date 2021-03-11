// Problem 3:- Given an array, rotate the array to the right by k steps, where k is non-negative...
const input = [5,6,7,2,1];              // input array
let length = input.length;                // finding length of array     
let k=4;                                   // number of elements to rotate the right of array
if(k>0 && !k>length){                                   // checking k should positive
    for(let g=length-k;g<length;g++){      // subtracting k from lenght of array our loop will run k times
        input.unshift(input.pop());      // our length of array is 7 we minus 4 from it so we are 
    }                                      // removing that element and putting back at start of array one by one
}                                          //
console.log('Problem 3 solution',input);  // Output => [4,5,6,7,1,2,3]