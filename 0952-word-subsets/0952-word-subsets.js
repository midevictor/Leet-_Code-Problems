/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {

    //a helper function;
   const getFreq = (word => {
    let freq = {};
    for(const char of word){
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
   });

   //get the max frew of word2
   const maxFreq = {};
   for(const word of words2){
    let freq = getFreq(word);
    for (const char in freq){
        maxFreq[char] = Math.max((maxFreq[char] || 0), freq[char]);
    }
   }
//    console.log(maxFreq);

let res = [];
for(const word of words1){
    freq = getFreq(word);
    let isUniversal = true;

    for(let char in maxFreq){
        if((freq[char] || 0)<maxFreq[char]){
        isUniversal = false;
        break;
        }
    }
     if(isUniversal){
            res.push(word);
        }
}
return res;
};