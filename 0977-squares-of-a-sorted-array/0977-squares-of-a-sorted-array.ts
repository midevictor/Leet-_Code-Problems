function sortedSquares(nums: number[]): number[] {
    nums.sort((a,b)=> a-b);
    for (let i = 0; i < nums.length; i++){
        nums[i] = nums[i]*nums[i]
    }
    nums.sort((a,b)=> a-b);
    return nums;

};