// Problem 6:- Below we will define an n-interesting polygon. find the area of a polygon for a given n.
// method 1                                //
let n=3;                                   // input number 
console.log('Problem 6 solution',(n*n)+(n-1)*(n-1))  // formula for calculating area
                                           //
// method 2                                //
// let c=4;                                // c is already given in this formula i.e. 4
// let p=1;                                // p is for the sum of all values
// if(n>1){                                // checking n should greater than 1
// for(let i=1;i<n;i++){                   // for loop will run one time less than n value
//     p+=(c*(n-i));                       // calculating iteration
// }                                       // 
// console.log(p);                         // output => 13
// }                                       //
// else{                                   // if n=1 
//   console.log('Problem 6 solution',p);  // output => 1
// }                                       //