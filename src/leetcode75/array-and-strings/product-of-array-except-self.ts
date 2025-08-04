function productExceptSelf(nums: number[]) {
  const prefix = [0]
  const suffix = new Array(nums.length).fill(1)

  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[nums.length - 1] * nums[i]
    console.log(nums[i])
  }

  console.log(prefix, suffix)
}

const nums = [1, 2, 3, 4]

console.log(productExceptSelf(nums))
