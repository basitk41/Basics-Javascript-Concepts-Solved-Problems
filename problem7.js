//Problem 7:-Given the string, check if it is a palindrome............................
let str = "aasbsaa";                       // input string
let strLength = str.length;                // finding string length
let it = strLength-1;                      // assigning length of str but one time less because our index starts from 0 so we minus 1 
let strResult = false;                     // boolean variable with initial value fasle
for(let i=0;i<strLength;i++){              // for loop
     if(str[i]===str[it]){                 // checking first and last element of string then 2nd and 2nd last and so on
          strResult = true;                // if it is equal we will pass true value to our boolean variable
          it-=1;                           // and decremenet our variable for 2nd on and so on
     }                                     //
     else{                                 // else part
         strResult=false;                  // if not equal we will assign false value to boolean and terminate loop here.
         break;                            // will terminate for loop 
     }                                     //
}                                          //
console.log('Problem 7 solution',strResult); // Output => true