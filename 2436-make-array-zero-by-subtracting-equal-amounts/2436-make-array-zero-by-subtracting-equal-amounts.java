class Solution {
    public int minimumOperations(int[] nums) {
        HashSet<Integer> Hash = new HashSet<>();

        for(int num : nums){
          if(num != 0){
            Hash.add(num);
          }
                
            
        }

        return Hash.size();
        
    }
}