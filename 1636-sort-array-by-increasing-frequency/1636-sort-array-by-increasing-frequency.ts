function frequencySort(nums: number[]): number[] {
    const frequencyMap = new Map();
    for (let num of nums){
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    nums.sort((a, b) => {
        const frequencyA = frequencyMap.get(a);
        const frequencyB = frequencyMap.get(b);
        
        if(frequencyA !== frequencyB){
            return frequencyA - frequencyB;
        }
        else{
            return b - a
        }
    })
    
    return nums;

};
