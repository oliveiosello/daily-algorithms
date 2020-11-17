const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b);
 
    let seenHash = {};
    let result = [];
 
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let k = j + 1;
            let l = nums.length - 1;
 
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
 
                if (sum > target) {
                    l--;
                } else if (sum < target) {
                    k++;
                } else if (sum === target) {
                    let temp = [];
                    temp.push(nums[i], nums[j], nums[k], nums[l]);
                    if (!seenHash[temp]) {
                        seenHash[temp] = temp;
                        result.push(temp);
                    }
                    k++;
                    l--;
                }
            }
        }
    }
    return result;
}

// console.log(fourSum([1,0,-1,0,-2,2], 0))