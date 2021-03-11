//Problem 13
const matrix = [
    //   [6,2,4],
   //   [1,5,9],
   //   [8,7,5]
   // [5, 3, 4],
   // [1, 5, 8],
   // [6, 4, 2]
   //    [8,2,6],
   //    [2,5,8],
   //    [2,2,2]
         [8,3,4],
         [1,5,9],
         [6,7,2]

];
const copy = [
   //   [6,2,4],
   //   [1,5,9],
   //   [8,7,5]
   // [5, 3, 4],
   // [1, 5, 8],
   // [6, 4, 2]
   //    [8,2,6],
   //    [2,5,8],
   //    [2,2,2]
   [8,3,4],
   [1,5,9],
   [6,7,2]

];
//matrix.slice();
//Object.assign(copy,matrix);
//Array.from(matrix);
const constant = 3*matrix[1][1];
// for corners

if(matrix[0][0]%2!==0){
   if(matrix[0][2]!==2&&matrix[2][0]!==2&&matrix[2][2]!==2){
       matrix[0][0] = 2;
   }
   else if(matrix[0][2]!==4&&matrix[2][0]!==4&&matrix[2][2]!==4){
       matrix[0][0] = 4;
   }
   else if(matrix[0][2]!==6&&matrix[2][0]!==6&&matrix[2][2]!==6){
       matrix[0][0] = 6;
   }else if(matrix[0][2]!==8&&matrix[2][0]!==8&&matrix[2][2]!==8){
       matrix[0][0] = 8;
   }
}
if(matrix[0][2]%2!==0){
   if(matrix[0][0]!==2&&matrix[2][0]!==2&&matrix[2][2]!==2){
       matrix[0][2] = 2;
   }
   else if(matrix[0][0]!==4&&matrix[2][0]!==4&&matrix[2][2]!==4){
       matrix[0][2] = 4;
   }
   else if(matrix[0][0]!==6&&matrix[2][0]!==6&&matrix[2][2]!==6){
       matrix[0][2] = 6;
   }else if(matrix[0][0]!==8&&matrix[2][0]!==8&&matrix[2][2]!==8){
       matrix[0][2] = 8;
   }
}
if(matrix[2][0]%2!==0){
   if(matrix[0][2]!==2&&matrix[0][0]!==2&&matrix[2][2]!==2){
       matrix[2][0] = 2;
   }
   else if(matrix[0][2]!==4&&matrix[0][0]!==4&&matrix[2][2]!==4){
       matrix[2][0] = 4;
   }
   else if(matrix[0][2]!==6&&matrix[0][0]!==6&&matrix[2][2]!==6){
       matrix[2][0] = 6;
   }else if(matrix[0][2]!==8&&matrix[0][0]!==8&&matrix[2][2]!==8){
       matrix[2][0] = 8;
   }
}
if(matrix[2][2]%2!==0){
   if(matrix[0][2]!==2&&matrix[2][0]!==2&&matrix[0][0]!==2){
       matrix[2][2] = 2;
   }
   else if(matrix[0][2]!==4&&matrix[2][0]!==4&&matrix[0][0]!==4){
       matrix[2][2] = 4;
   }
   else if(matrix[0][2]!==6&&matrix[2][0]!==6&&matrix[0][0]!==6){
       matrix[2][2] = 6;
   }else if(matrix[0][2]!==8&&matrix[2][0]!==8&&matrix[0][0]!==8){
       matrix[2][2] = 8;
   }
}
//
//corners
//(matrix[0][0]===8)?matrix[0][2]=6:(matrix[0][2]===8)?matrix[0][0]=6:(matrix[2][0]===8)?matrix[2][2]=6:(matrix[2][2]===8)?matrix[2][0]=6:null;
//(matrix[0][0]===6)?matrix[0][2]=8:(matrix[0][2]===6)?matrix[0][0]=8:(matrix[2][0]===6)?matrix[2][2]=8:(matrix[2][2]===6)?matrix[2][0]=8:null;
//(matrix[0][0]===2)?matrix[0][2]=4:(matrix[0][2]===2)?matrix[0][0]=4:(matrix[2][0]===2)?matrix[2][2]=4:(matrix[2][2]===2)?matrix[2][0]=4:null;
//(matrix[0][0]===4)?matrix[0][2]=2:(matrix[0][2]===4)?matrix[0][0]=2:(matrix[2][0]===4)?matrix[2][2]=2:(matrix[2][2]===4)?matrix[2][0]=2:null;
//diagnols
(matrix[0][0]===8)?matrix[2][2]=2:(matrix[0][2]===8)?matrix[2][0]=2:(matrix[2][0]===8)?matrix[0][2]=2:(matrix[2][2]===8)?matrix[0][0]=2:null;
(matrix[0][0]===6)?matrix[2][2]=4:(matrix[0][2]===6)?matrix[2][0]=4:(matrix[2][0]===6)?matrix[0][2]=4:(matrix[2][2]===6)?matrix[0][0]=4:null;
(matrix[0][0]===2)?matrix[2][2]=8:(matrix[0][2]===2)?matrix[2][0]=8:(matrix[2][0]===2)?matrix[0][2]=8:(matrix[2][2]===2)?matrix[0][0]=8:null;
(matrix[0][0]===4)?matrix[2][2]=6:(matrix[0][2]===4)?matrix[2][0]=6:(matrix[2][0]===4)?matrix[0][2]=6:(matrix[2][2]===4)?matrix[0][0]=6:null;
//for edges
matrix[0][1]=constant - (matrix[0][0]+matrix[0][2]);
matrix[1][0]=constant - (matrix[0][0]+matrix[2][0]);
matrix[1][2]=constant - (matrix[0][2]+matrix[2][2]);
matrix[2][1]=constant - (matrix[2][0]+matrix[2][2]);
let cost=0;
for(let i=0;i<3;i++){
   for(let j=0;j<3;j++){
       if(copy[i][j]!==matrix[i][j]){
           cost+=Math.abs(copy[i][j]-matrix[i][j]);
       }
   }
}
console.log('Problem 13 Solution:','minimum cost:',cost);
console.log('Problem 13 Solution:',matrix);