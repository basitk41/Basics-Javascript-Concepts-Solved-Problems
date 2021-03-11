processing = (downloading,executing) =>{
    setTimeout(()=>{
        console.log('Please wait while processing...');
        setTimeout(()=>{
            console.log('Processing completed.');
            downloading(executing);
        },5000);
    },1000);
};

downloading = (executing) =>{
    setTimeout(()=>{
        console.log('Please wait while downloading...');
        setTimeout(()=>{
            console.log('Downloading completed.');
            executing();
        },5000);
    },1000);
};

executing = () =>{
    setTimeout(()=>{
        console.log('Please wait while executing...');
        setTimeout(()=>{
            console.log('Execution completed.');
        },5000);
    },1000);
};

init = () =>{
    processing(downloading,executing);
};
init();