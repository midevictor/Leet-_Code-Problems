/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    const map = new Map(); // Ball -> Color
    const countMap = new Map(); // Color -> Frequency
    const set = new Set(); // Unique colors, we use set cos of distinct colors
    let result = [];

    for (let [x, y] of queries) {
        if (map.has(x)) {
            let prevColor = map.get(x);
            if (prevColor === y) {
                // If color is unchanged, just return current unique count
                result.push(set.size);
                continue;
            }
            // we do this cos theremight anothe ball tha has the same color w the prev, so we just minus
            countMap.set(prevColor, countMap.get(prevColor) - 1);
            //if there is no other ball , we delete it from the set
            if (countMap.get(prevColor) === 0) {
                set.delete(prevColor);
            }
        }

        // if map doese not have x, set map with the bvall and color
        map.set(x, y);
        // incremnt the countMap
        countMap.set(y, (countMap.get(y) || 0) + 1);
        //add y to the set
        set.add(y);

        result.push(set.size);
    }

    return result;
};
