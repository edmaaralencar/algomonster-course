function longestOnes(nums: number[], k: number): number {
  let left = 0
  let zeroCount = 0
  let max = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++

    if (zeroCount > k) {
      if (nums[left] === 0) zeroCount--
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

// const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
// const k = 3
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
const k = 2

console.log(longestOnes(nums, k))
