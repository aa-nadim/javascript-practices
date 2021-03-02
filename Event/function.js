function evenify_all(nums){
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        //console.log(element);
        if(element % 2 == 0){
            console.log(element * 2 , ': is even number')
        }
        else{
            console.log(element, ': is odd number')
        }
    }
}

nums = [3,5,2,4,6,7,8,22,444,555,2];

evenify_all(nums);

