function longestPalindrome(s: string): string {
    let results = "";
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        let left = i;
        let right = i;
        
        while(left > 0 && s[left - 1] === char){
            left--;
        }
        
        while(right < s.length && s[right + 1] === char){
            right++;
            i++;
        }
        while(left >= 0 && right < s.length - 1 && s[left - 1] === s[right + 1]){
            left--;
            right++;
        }
        
        if( results.length < (right - left + 1)){
            results = s.slice(left, right + 1 )
        }
        
        
    }
    
    return results;




//  let results = "";
    
//     for(let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let left = i;
//         let right = i;
        
//         while(left > 0 && str[left - 1] === char) left--;
        
//         while(right < str.length && str[right + 1] === char) {
//             right++;
//             i++;
//         }
		
//         while(left >=0 && right < str.length - 1 && str[left - 1] === str[right + 1]) {
//             left--;
//             right++;
//         }
        
//         if(results.length < (right - left + 1)) results = str.slice(left, right + 1);
//     }
//     return results;
    };