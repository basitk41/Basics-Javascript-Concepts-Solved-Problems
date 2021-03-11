delayedUpperCase = (input,n) =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            if(typeof(input)==='string'){
                resolved(input.toUpperCase());
            }
            else{
                rejected('Error:'+input+' is not a string')
            }
        },n);
    });
};
//delayedUpperCase(124,3000).then((success)=>{console.log(success);}).catch((error)=>{console.log(error)});
init= async () =>{
    try{
        let x = await delayedUpperCase('basit',100);
         console.log(x);
        }
    catch(ex){
         console.log(ex)
    }
};
init();




