/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
//     let length = intervals.length;
//     intervals.sort((a,b) => a[0] - b[0]);
   
//     for(let i = 1; i < length; i++){
//         //an overlap occurs
//         if(intervals[i][0] <= intervals[i-1][1]){
//             if(intervals[i][1] >= intervals[i-1][1]){
//                 intervals.splice(i-1, 2, [intervals[i-1][0], intervals[i][1]]);
//                 //starIndx, noofindxto remove, addIdx 
//             }
//             else{
//                 intervals.splice(i, 1);
//                 //remove just the currIdx
//             }
//             i--;
//             //so as to avoid skipping the next indicies, cos i+1 ois now the new i
//             length--;  
//             //to avoid rhe loop from going beyond 
//         } 
//     }
//     return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++){
        let lastInt = result[result.length - 1];
        if(intervals[i][0] <= lastInt[1]){
            lastInt[1] = Math.max(intervals[i][1], lastInt[1]) 
        }
        else{
            result.push(intervals[i])
        }
    }
    return result;
			
};
//sort the intervals by the 1st integer in the array
