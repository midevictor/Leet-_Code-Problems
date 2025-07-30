/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0;
    let bestSpotSoFar = values[0] + 0;

    for(let i = 1; i < values.length; i++){
        let currScore = bestSpotSoFar + values[i] - i;
         maxScore = Math.max(maxScore, currScore);

        bestSpotSoFar = Math.max(bestSpotSoFar, values[i] + i);
    }

    return maxScore;
    
};