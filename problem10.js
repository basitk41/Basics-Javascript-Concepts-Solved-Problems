// Problem 10:-Given a square matrix, calculate the absolute difference between the sums of its diagonals.
const two2D = [                             // input 2D array
    [11, 2,  4],                            // 
    [4,  5,  6],                            //
    [10, 8,-12]                             //  
];                                          // 
let leftDiagnol = 0;                        // variable for the sum of left diagnol elements
let rightDiagnol = 0;                       // variable for the sum of right diagnol elements
let forRight=two2D.length-1;                // pointer variable for right diagnol elements
for(let i=0;i<two2D.length;i++){            // for loop
    leftDiagnol+=two2D[i][i];               // this will get left diagnol elements and add to leftDiagnol i.e [0][0],[1][1],[2][2]
    rightDiagnol+=two2D[i][forRight];       // this will get right diagnol elements and add to rightDiagnol i.e [0][2],[1][1],[2][0]
    forRight-=1;                            // decrementing our pointer variable 
}                                           //
let diff = Math.abs(leftDiagnol-rightDiagnol); // finding absolute differnce between left and right diagnols
console.log('Problem 10 solution:',         // output => 15
'Absolute Diagnols Difference:',             //
diff);                                      //