// let x=10;
// let y=20;
// let sum = 3;
// function mutli(z){
//        //console.log(z);
       
//        setTimeout(()=>{
//         sum=sum*z;
//         //console.log(z);
//         //console.log(sum);
//        },100);
// };
// function add() {
//     console.log(x);
//     console.log(y);
//     setTimeout(()=>{
//         console.log(x);
//         console.log(y);
//         console.log(sum);
//        sum+= x+y;
//        console.log(sum);
//     },500);
    
// };
// function init(){
   
//    add();
//    mutli(2);
//    console.log(sum);
// };
// init();

// Call Back 
callBackOne = () =>{
    setTimeout(()=>{
        console.log('callBackOne called');
  },100);
};

callBackTwo = (call) =>{
    setTimeout(()=>{
        console.log('callBackTwo called');
        call();
    },400);  
};

initOne = () =>{
   callBackTwo(callBackOne);
   
};
initOne();

// // Promises
promiseOne = () =>{
    setTimeout(()=>{
        console.log('promiseOne called');
  },100)
};
promiseTwo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('promiseTwo called');
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:something went wrong.');
            }
        },400);
    }); 
};
initTwo = () =>{
   promiseTwo().then(promiseOne).catch((error)=>{
    console.log(error);
});
   
};
initTwo();

//async await
asyncOne = () =>{
    setTimeout(()=>{
        console.log('asyncOne called');
  },100)
};
asyncTwo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('asyncTwo called');
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:something went wrong.');
            }
        },400);
        
    });
    
};
initThree = async () =>{
  await asyncTwo();
  asyncOne();

   
};
initThree();

