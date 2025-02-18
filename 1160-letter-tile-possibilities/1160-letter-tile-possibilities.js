/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let count = 0;
    const freqMap = new Map();

    // Build frequency map
    for (let ch of tiles) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }

    function backtrack() {
        // console.log(`Path: ${path}, FreqMap:`, Object.fromEntries(freqMap));

        for (let [ch, freq] of freqMap.entries()) {
            if (freq > 0) {
                freqMap.set(ch, freq - 1);
                count++;

                backtrack();

                freqMap.set(ch, freq); // Undo choice
            }
        }
    }

    backtrack();
    return count;
};

// console.log("Total Sequences:", numTilePossibilities("AAB"));
