/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    return (nums[indexToFind]);
    
};

//a quickSort Function
const quickSort = function(arr, left,right){
    if(left < right){
        const partitionInd = partition(arr, left, right);
        quickSort(arr, left, partitionInd-1 );
        quickSort(arr, partitionInd+1, right);
    }
}

const partition = function(arr, left, right){
    const pivot = arr[right];
    let partitionInd = left;
    for(let j = left; j < right; j++){
        if(arr[j] < pivot){
            swap(arr, partitionInd,j );
            partitionInd++;
        }
    }
    swap(arr, partitionInd, right);
    return partitionInd;
}

const swap = function(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}