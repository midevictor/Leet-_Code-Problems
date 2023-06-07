function lengthOfLongestSubstring(s: string): number {
     //if the length of the initial string is less than 1 
    if(s.length <= 1){
        return s.length;
    }
    //initialize the length of the string to zero
    let longestStr = 0;
    for( let i = 0; i< s.length; i++){
        //creates an empty stri
        let knownCharacters = {};
        let currentLongestString = 0;
        for( let j = i; j < s.length; j++ ){
            const currentCharacter = s[j]; 
            //checks if the current character is a key in the string created
            if(!knownCharacters[currentCharacter]){
               currentLongestString++;
               knownCharacters[currentCharacter] = true;
                longestStr = Math.max(longestStr, currentLongestString)
            }
            else{
                break;
            }
        }
    }
    return longestStr;
    

};