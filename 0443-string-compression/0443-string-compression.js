/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let count = 1;
  let index = 0;
  for(let i = 0; i < chars.length; i++){
      if(chars[i] === chars[i+1]){
          count++;
      }
      else{
          chars[index++] = chars[i]
          if(count > 1){
              let newCount = count.toString();
              for (let j = 0; j < newCount.length; j++){
                  chars[index++] = newCount[j];
              }
          }
          count = 1;
      } 
  }
  return index;

};

// var compress = function(chars) {
//     let count = 1; // Initialize the count of consecutive characters to 1
//     let index = 0; // Initialize the current index where we're writing

//     for (let i = 0; i < chars.length; i++) {
//         if (chars[i] === chars[i + 1]) {
//             // If the current character is the same as the next character, increment the count
//             count++;
//         } else {
//             // If the current character is different from the next character or we've reached the end of the array:
//             chars[index++] = chars[i]; // Write the character to the current position
            
//             if (count > 1) {
//                 // If count is greater than 1, we need to write the count as characters
//                 let countStr = count.toString();
//                 for (let j = 0; j < countStr.length; j++) {
//                     chars[index++] = countStr[j];
//                 }
//             }

//             count = 1; // Reset the count for the new character
//         }
//     }
    
//     return index; // Return the length of the compressed array
// };
