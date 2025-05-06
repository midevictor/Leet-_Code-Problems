/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    // this question is a bit related to fibonacci sequence but comes with a twist
    // we have return a count of possible number 
    let count = 0;
    const freqMap = new Map();

    // Build frequency map
    for (let ch of tiles) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }

    function backtrack() {
        // console.log(`Path: ${path}, FreqMap:`, Object.fromEntries(freqMap));
        // loop through the frequency map
        for (let [ch, freq] of freqMap.entries()) {
            if (freq > 0) {
                freqMap.set(ch, freq - 1);
                count++;

                backtrack();
         // we undo because we could have another sequence that needs the ch we have gone thru
                freqMap.set(ch, freq); // Undo choice
            }
        }
    }

    backtrack();
    return count;
};

// console.log("Total Sequences:", numTilePossibilities("AAB"));
