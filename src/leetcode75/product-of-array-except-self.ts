function productExceptSelf(nums: number[]): number[] {
  const prefix = new Array(nums.length).fill(1)
  const suffix = new Array(nums.length).fill(1)
  const result = new Array(nums.length)

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1]
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i]
  }

  return result
}

const nums = [1, 2, 3, 4]

console.log(productExceptSelf(nums))
