// Problem 5:- Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
const array5 = [-4, 5, -2, 5, -7, 3];      // input array
// let product=1;                          // our adjacent elements product will  
let product=array5[0]*array5[1];           // our adjacent elements product will  
// Method 1                                // assign to this variable(initial value is 1)
for(let i=0;i<array5.length-1;i++){        // for loop but one time less than array length
    if((array5[i]*array5[i+1])>product){   // checking the adjacent elements 
        product=(array5[i]*array5[i+1]);   // if it is greater than product assign 
    }                                      // to product
}                                          //
console.log('Problem 5 solution',product); // output => 21
// method 2                                //
// let el = 1;                             // will put previous element value according to pointer
// for(let value of array5){               // for of loop
//     if((value * el)>product){           // checking if ajdacent prodduct is greater than product variable
//         product=(value*el);             // if greater then assign the multiplication to product
//         el=value;                       // put value to el 
//     }                                   //
//     else{                               // else
//         el=value;                       // if not eqaul put value to el
//     }                                   //
// }                                       //
//console.log('Problem 5 solution',product); // output => 21