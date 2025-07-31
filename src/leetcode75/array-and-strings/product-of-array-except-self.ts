function productExceptSelf(nums: number[]) {
  const prefix = new Array(nums.length).fill(1)
  const suffix = new Array(nums.length).fill(1)

  // 1 / 1 * 2 / 1 * 2 * 3 / 1 * 2 * 3 * 4

  // 1 * 2 * 3 * 4 / 1 * 2 * 3 / 1 * 2 / 1

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = nums[i]
    } else {
      prefix[i] = nums[i] * (nums[i - 1] ?? 0)
    }
  }

  for (let i = 0; i < nums.length; i++) {
    console.log(i, nums.length - i - 1)

    suffix[i] = nums[nums.length - i - 1] * (nums[nums.length - i - 1 + 1] ?? 0)
  }

  console.log(prefix, suffix)
}

const nums = [1, 2, 3, 4]

console.log(productExceptSelf(nums))
