function findRestaurant(list1: string[], list2: string[]): string[] {
    const hashMap = new Map();
    let output;
    for (let i = 0; i < list1.length; i++){
        hashMap.set(list1[i], i);
    }
    
    for(let j = 0; j < list2.length; j++){
        const isExist = hashMap.has(list2[j]);
        const indexOf = hashMap.get(list2[j]);
        if(isExist && (!output || j + indexOf  < output.sumOfIndex)){
            output = {
                value : [list2[j]],
                sumOfIndex : j + indexOf,
            }
        }
    else if(isExist && j + indexOf === output.sumOfIndex){
        output.value.push(list2[j]);
    }
        
    }
    
    return output.value;

};
  