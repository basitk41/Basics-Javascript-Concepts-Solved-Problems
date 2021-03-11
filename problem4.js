// Problem 4:- Create a nested Create a nested for loops produce the loops produce the following output...
for(let h=1;h<6;h++){                      // outer for loop
    let bb='';                             // variable initialized empty
    for(let k=5;k>0;k--){                  // inner for loop
        if(k>h){                           // checking if inner loop variable is greater 
            bb+=".";                       // if greater concatinate '.' with variable bb
        }                                  //
        else{                              // else part if outer loop variable is equal or greater than inner
           bb+=h;                          //  concatinate outer loop variable with variable bb
        }                                  // 
    }                                      //
    console.log('Problem 4 solution',bb);  // Output => ....1
}                                          //           ...22
                                           //           ..333
                                           //           .4444
                                           //           55555