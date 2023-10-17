function isPerfectSquare(num: number): boolean {
    let low = 1;
    let high = num;
    while(low <= high){
        const mid =  Math.floor((low+high)/2);
        let square = squareNum(mid);
        if(square === num){
            return true;
        }
        else if( square < num){
            low = mid + 1;
        }
        else{
            high = mid - 1
        }
    }
    return  false;

};

function squareNum(mid: number){
    return mid * mid
}


// // Function to calculate the square of a number
// function squareNum(mid: number) {
//   return mid * mid;
// }

// // Function to check if a number is a perfect square
// function isPerfectSquare(num: number) {
//   let low = 1; // Initialize the lower bound for the binary search
//   let high = num; // Initialize the upper bound for the binary search

//   // Perform a binary search to find the square root of the given number
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2); // Calculate the mid point
//     const sqrt = squareNum(mid); // Calculate the square of the mid point
//     if (sqrt === num) {
//       // If the square of the mid point is equal to the given number, it is a perfect square
//       return true;
//     } else if (sqrt > num) {
//       // If the square of the mid point is greater than the given number, search in the left half
//       high = mid - 1;
//     } else {
//       // If the square of the mid point is less than the given number, search in the right half
//       low = mid + 1;
//     }
//   }

//   // If the loop exits, the number is not a perfect square
//   return false;
// }