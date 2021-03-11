processing = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            let error = false;
            if(!error){
                console.log('Please wait while processing...');
                setTimeout(()=>{
                    console.log('Processing completed.');
                    resolved();
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
        if(!error){
            setTimeout(()=>{
                console.log('Please wait while downloading...');
                setTimeout(()=>{
                    console.log('Downloading completed.');
                    resolved();
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
                console.log('Please wait while executing...');
                setTimeout(()=>{
                    console.log('Execution completed.');
                    resolved();
                },5000);
            },1000);
        }
        else{
            rejected('Error:Error while executing.');
        }
    });
            
};

init = () =>{
    processing().then(downloading).then(executing);
};
init();