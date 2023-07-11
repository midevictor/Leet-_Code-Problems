function frequencySort(nums: number[]): number[] {
    const frequencyMap: Map <number, number> = new Map();
    for (let num of nums){
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    nums.sort((a, b) => {
        const frequencyA: number = frequencyMap.get(a);
        const frequencyB: number = frequencyMap.get(b);
        
        if(frequencyA !== frequencyB){
            return frequencyA - frequencyB;
        }
        else{
            return b - a
        }
    })
    
    return nums;

};
// create a map
// loop through the nums array
//     1)if the num dosent exist set count to 1 else add  1 to the existing value
// sort the nums array
//      1) create a variable for the frequency of a
//      2) create a variable for the frequency of b
//      3) if frequencyA!==frequencyB
//           i)increasing order of freqq
//      4) else: decreasing order
