// Problem 11:-Given an array of integers, calculate the ratios of its elements ......
// const array6 = [-4, 3, -9, 0, 4, 1,];       // input array
// let positiveNumbers=0;                      // for positive numbers
// let negativeNumbers=0;                      // for negative numbers
// let zeros = 0;                              // for zeros
// let totalNumbers = array6.length;           // finding total numbers
// for(let value of array6){                   // for of loop for getting elements
//     if(value>0){                            // checking if positive 
//         positiveNumbers+=1;                 // then increment positiveNumbers
//     }                                       // 
//     if(value<0){                            // checking if negative
//         negativeNumbers+=1;                 // increment negativeNumbers
//     }                                       // 
//     if(value===0){                          // checking if zero
//         zeros+=1;                           // increment zeros
//     }                                       //
// }                                           //
// // console.log('Positive Numbers:',positiveNumbers); //
// // console.log('Negetive Numbers:',negativeNumbers); //
// // console.log('Zeros:',zeros);             //
// console.log('Problem 11 solution:',         // 
// 'proportion of positive values:',           // 
// positiveNumbers/totalNumbers);              // finding positive numbers ratio by dividing total numbers
// console.log('Problem 11 solution:',         // 
// 'proportion of negative values:',           //
// negativeNumbers/totalNumbers);              // finding negative numbers ratio 
// console.log('Problem 11 solution:',         //
// 'proportion of zeros:',                     //
// zeros/totalNumbers);                        // finding zeros numbers ratio
/////////////////////////////////////////////////////////////////////

// reduce method using array
// const array6 = [-4, 3, -9, 0, 4, 1];
// const counting = array6.reduce((arr,element)=>{
//     (element>0)?arr[0]++:(element<0)?arr[1]++:arr[2]++;
//     return arr;
// },[0,0,0]);
// console.log(counting);

//Reduce method using object
const array6 = [-4, 3, -9, 0, 4, 1];
const counting = array6.reduce((obj,element)=>{
    (element>0)?obj.pos+=1:(element<0)?obj.neg+=1:obj.zero+=1;
    return obj
},{pos:0,neg:0,zero:0});
console.log('Ratio of Positives:',counting.pos/array6.length);
console.log('Ratio of Negatives:',counting.neg/array6.length);
console.log('Ratio of Zeros:',counting.zero/array6.length);