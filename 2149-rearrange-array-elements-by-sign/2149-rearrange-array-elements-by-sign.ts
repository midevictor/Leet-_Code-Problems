function rearrangeArray(nums: number[]): number[] {
    let positiveNums = nums.filter(num => num > 0);
    if(positiveNums.length === nums.length){
        return nums;
    }
    let negativeNums = nums.filter(num => num < 0);
    let newArray = [];
    for( let i = 0; i < positiveNums.length; i++){
        newArray.push(positiveNums[i], negativeNums[i]);
    }
    
    return newArray;
};