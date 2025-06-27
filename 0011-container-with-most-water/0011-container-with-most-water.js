/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //initiaized maximunm area to zero
    // let maxArea = 0;
    // for(let a = 0; a < heights.length; a++){
    //     for( let b = a + 1; b < heights.length; b++){
    //         let height = Math.min(heights[a], heights[b]);
    //         let width =  b - a;
    //         let area = width * height;
    //         maxArea = Math.max(maxArea, area)
    //     }
    // }
    // return maxArea;

    let a = 0;
    let b = height.length - 1;
    let maxArea = 0;
    while (a < b){
        let heigh = Math.min(height[a], height[b]);
        let width =  b - a;
        let area = width * heigh;
        maxArea = Math.max(maxArea, area);

        if(height[a] <= height[b]){
            a++;
        }
        else{
            b--;
        }

    }
    return maxArea;

//     let max = 0;
//     for (let low = 0, high = height.length - 1; low < high; ) {
// 	    let area = (high - low) * Math.min(height[low], height[high]);
// 		if (max < area) {
//             max = area;
//         }
//         if (height[low] > height[high]) {
//             high--;
//         }
//         else {
//             low++;
//         }
//     }
//     return max;
    
};