
// twoSum([6,3,2,], 9)

var twoSum = function(nums, target) {
    let flag = false
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i != j && nums[i] + nums[j] == target) {
                flag = true
                console.log([i, j])
            }
        }
        if(flag)break
    }    
};

twoSum([3,5, 3], 6)