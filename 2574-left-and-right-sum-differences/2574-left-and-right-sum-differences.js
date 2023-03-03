/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let answer = [];
    for (let i = 0; i < nums.length; i++){
        let leftSum =0;
        let rightSum = 0;
        for(let j = 0; j < i; j++){
            leftSum = leftSum + nums[j];
        }
        for(let j = i + 1;j < nums.length; j++){
            rightSum=rightSum+nums[j];
        }
        answer.push(Math.abs(leftSum-rightSum));
    }
    return answer;
    
};

// const ans=[];
//     for(let i=0;i<nums.length;i++){
//         let leftSum=0,rightSum=0;
//         for(let j=0;j<i;j++)
//             leftSum=leftSum+nums[j];
//         for(let j=i+1;j<nums.length;j++)
//             rightSum=rightSum+nums[j];
//         ans.push(Math.abs(leftSum-rightSum));
//     }
//     return ans;