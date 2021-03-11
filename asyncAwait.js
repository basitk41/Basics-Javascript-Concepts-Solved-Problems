process1 = async () =>{
           let x=1;
           setTimeout(()=>{
               x=2;
        },3000);
           return x;
    };

// init = async () =>{
//     try{
//         const a = await process1();
//         console.log(a);
//         console.log('Bye');
//     }
//     catch(ex){
//         console.log(ex);
//     }
// };
// init();
async function x(){
    const a = process1();
    console.log(a);
}
x();