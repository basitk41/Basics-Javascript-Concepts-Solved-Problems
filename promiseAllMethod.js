// all prmises should be resolved or for any to be rejected.
processing = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            let error = false;
            if(!error){
                //console.log('Please wait while processing...');
                setTimeout(()=>{
                    //console.log('Processing completed.');
                    resolved('Processed');
                },5000);
            }
            else{
                rejected('Error:Error while processing.');
            }
        },1000);
    });
};

downloading = () =>{
    return new Promise((resolved,rejected)=>{
        let error = false;
        //let error = true;
        if(!error){
            setTimeout(()=>{
                //console.log('Please wait while downloading...');
                setTimeout(()=>{
                    //console.log('Downloading completed.');
                    resolved('Downloaded');
                },5000);
            },1000);
        }
        else{
            rejected('Error:Error while downloading.');
        }
    });
};

executing = () =>{
    return new Promise((resolved,rejected)=>{
        let error = false;
        if(!error){
            setTimeout(()=>{
                //console.log('Please wait while executing...');
                setTimeout(()=>{
                    //console.log('Execution completed.');
                    resolved('Executed');
                },5000);
            },1000);
        }
        else{
            rejected('Error:Error while executing.');
        }
    });
            
};

// init = () =>{
//     Promise.all([processing(),downloading(),executing()])
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
        const result = await Promise.all([processing(),downloading(),executing()]);
        console.log(result);
    }
    catch(ex){
        console.log(ex);
    }
};

init();