// // Problem 9:-Count frequencies of each entry in an array............................
const fruitBasket = ['banana', 'cherry',   // input array with fruits names
                     'orange', 'apple',    //
                     'cherry', 'orange',   //
                     'apple', 'banana',    //
                     'cherry','orange',    //
                      'fig','mango' ];     //
// const objCount = {};
// console.time('for');                       // initialized empty object
// for(let value of fruitBasket){             // for of loop for getting values
//     if(objCount.hasOwnProperty(value)){    // checking if the fruits names are property of objects
//            objCount[value]+=1;             // if yes: then increment thier values by one
//     }                                      //
//     else{                                  // if not:
//         objCount[value] = 1;               // then create that property and initially assign 1 
//     }                                      //
// }     
// console.timeEnd('for');                                     //
// console.log('Problem 9 solution:',objCount); // output => object
// Reduce method
const fruitBasket = ['banana', 'cherry','orange', 'apple','cherry', 'orange','apple', 'banana','cherry','orange','fig','mango' ]; 
console.time('reduce');
const fruitCount = fruitBasket.reduce((obj,fruit)=>{
    if(!obj[fruit])
        obj[fruit]=1;
    else
        obj[fruit]++;
    return obj;
},{});
console.timeEnd('reduce');
console.log('Problem 9 solution:',fruitCount);
