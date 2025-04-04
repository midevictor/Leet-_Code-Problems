class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> newMap = new HashMap();
        for(int i = 0; i < nums.length; i++){
            int num1 = nums[i];
            int num2 = target - num1;
            if(newMap.containsKey(num2)){
                return new int[]{i, newMap.get(num2)};
            }
            newMap.put(num1, i);
        }
        return new int[]{};
        
    }
}


    // let map = new Map();
    
    // for(let i = 0; i < nums.length; i++){
    //     let num1 = nums[i];
    //     let num2  = target - num1
    //     if(map.has(num2)){
    //         return [i, map.get(num2)];
    //     }
    //     map.set(num1 , i);
    // }
    