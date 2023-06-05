function validMountainArray(arr: number[]): boolean {
       // 2 pointers - one will move from left to right and other will move from right to left
	// so that both meet at the peak point
    let left = 0,
        right = arr.length - 1;
    
	// condition: while either of the pointer is able to move
    while(arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
        if(arr[left] < arr[left + 1]) {
            ++left;
        }
        if(arr[right] < arr[right - 1]) {
            --right;
        }
    }
	// if left and right pointer does not meet at the peak - array contains equal integers or zig-zag pattern
	// OR all integers are in ascending order
	// OR all integers are in descending order
    if(left !== right || left === arr.length - 1 || right === 0) {
        return false;
    }
    return true;
};


    // 2 pointers - one will move from left to right and other will move from right to left
	// so that both meet at the peak point
	// condition: while either of the pointer is able to move
	// if left and right pointer does not meet at the peak - array contains equal integers or zig-zag pattern
	// OR all integers are in ascending order
	// OR all integers are in descending order
   