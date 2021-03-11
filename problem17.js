let error = false;
promiseFirst = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            if(!error){
                setTimeout(()=>{
                    resolved('Promise 1');
                },5000);
            }
            else{
                rejected('Error:Error in Promise 1.');
            }
        },1000);
    });
};

promiseSecond = () =>{
    return new Promise((resolved,rejected)=>{
        if(!error){
            setTimeout(()=>{
                setTimeout(()=>{
                    resolved('Promise 2');
                },5000);
            },1000);
        }
        else{
            rejected('Error:Error in Promise 2.');
        }
    });
};

promiseThird = () =>{
    return new Promise((resolved,rejected)=>{
        if(!error){
            setTimeout(()=>{
                setTimeout(()=>{
                    resolved('Promise 3');
                },5000);
            },1000);
        }
        else{
            rejected('Error:Error in Promise 3.');
        }
    });
            
};

// init = () =>{
//     Promise.all([promiseFirst(),promiseSecond(),promiseThird()])
//     .then((result)=>{
//         console.log(result);
//         console.log(result[0]);
//         console.log(result[1]);
//         console.log(result[2]);
//     }).catch((error)=>{
//         console.log(error);
//     });
// };

init = async () =>{
    try{
        const result = await Promise.all([promiseFirst(),promiseSecond(),promiseThird()]);
        console.log(result);
    }
    catch(ex){
        console.log(ex);
    }
};

init();