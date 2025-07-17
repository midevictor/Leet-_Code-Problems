/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longestStreak = 0;
    for(let num of set){
        if(set.has(num-1)){
            continue;
        }
        let currStreak = 1;
        let currNum = num
        while(set.has(currNum+1)){
            currNum++;
            currStreak++;
        }
        longestStreak  = Math.max(currStreak, longestStreak)
    }
    return longestStreak;
};