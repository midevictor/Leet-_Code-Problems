function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
        
    const integerMap =  new Map();
    for(let i = 0; i < items1.length; i++){
        integerMap.set(items1[i][0], items1[i][1]);
        // console.log(integerMap);
    }
    for(let j = 0; j < items2.length; j++){
        if(integerMap.has(items2[j][0])){
           integerMap.set(items2[j][0], integerMap.get(items2[j][0]) + items2[j][1]);
           }
        else{
        integerMap.set(items2[j][0], items2[j][1]);
             }
    // console.log(integerMap);
    }
    return Array.from(integerMap.entries()).sort((a,b) => a[0] - b[0]);


};