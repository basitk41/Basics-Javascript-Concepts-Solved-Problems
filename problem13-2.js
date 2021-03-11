console.time('reduce');
const sampleMatrix = [[[8,1,6],[3,5,7],[4,9,2]],
                      [[6,1,8],[7,5,3],[2,9,4]],
                      [[4,9,2],[7,5,3],[8,1,6]],
                      [[2,9,4],[3,5,7],[6,1,8]],
                      [[8,3,4],[1,5,9],[6,7,2]],
                      [[4,3,8],[9,5,1],[2,7,6]],
                      [[6,7,2],[1,5,9],[8,3,4]],
                      [[2,7,6],[9,5,1],[4,3,8]]];
                      
const inputMatrix = [[5,3,4],
                     [1,5,8],
                     [6,4,2]];
const cost =  [];
for(let i=0;i<sampleMatrix.length;i++){
    let sum=0;
    for(let j=0;j<sampleMatrix[0].length;j++){
        for(let k=0;k<sampleMatrix[0][0].length;k++){
            sum += Math.abs(sampleMatrix[i][j][k]-inputMatrix[j][k]);
        }
    }
    cost.push(sum);
}
const minCost = cost.reduce((sum,b)=>{
    if(b<sum)
        sum=b;
    return sum;
    });
    const magicMatrix = sampleMatrix[cost.indexOf(minCost)];
    console.log('minimum cost:',minCost);
    console.log(magicMatrix);
    console.timeEnd('reduce');