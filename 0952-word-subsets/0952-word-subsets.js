/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    // Helper function to compute character frequency of a word
    const getCharFrequency = (word) => {
        const freq = {};
        for (const char of word) {
            freq[char] = (freq[char] || 0) + 1;
        }
        return freq;
    };

    // Step 1: Build a maximum frequency map for words2
    const maxFreq = {};
    for (const word of words2) {
        const freq = getCharFrequency(word);
        for (const char in freq) {
            maxFreq[char] = Math.max(maxFreq[char] || 0, freq[char]);
        }
    }

    // Step 2: Filter words1 by checking against maxFreq
    const result = [];
    for (const word of words1) {
        const freq = getCharFrequency(word);
        let isUniversal = true;

        for (const char in maxFreq) {
            if ((freq[char] || 0) < maxFreq[char]) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) {
            result.push(word);
        }
    }

    return result;
};
