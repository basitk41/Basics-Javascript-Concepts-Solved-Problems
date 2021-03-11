//Problem 14 Queue
let arr = [1,2,3];
let arrTwo = [];
const queue = [];

addtoQueue = (value) =>{
    if(value){
    arr.push(value);
    const length1 = arr.length;
    if(length1>1){
        for(let i=0;i<length1;i++){
            queue.push(arr.pop());
        }
    }
    else if(length1===1){
        const arr2 = [];
        let length2 = queue.length;
        for(let i=0;i<length2;i++){
            arr2.push(queue.pop());
        }
        arr2.push(arr.pop());
        let lenght4 = arr2.length;
        for(let i=0;i<lenght4;i++){
            queue.push(arr2.pop());
        }
    }
   }
   else{
        const length3 = arr.length;
        for(let i=0;i<length3;i++){
            queue.push(arr.pop());
        }
   }
   return (value===undefined)?"Empty parameter.":value+" is inserted.";
}
removeQueue = () =>{
    addtoQueue();
    return (queue.length>0)?queue.pop():"No element in Queue.";
}
addtoQueue(4);
addtoQueue(5);
console.log('Problem 14 Solution:',removeQueue());