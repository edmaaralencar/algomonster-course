function subarraySumFixed(nums: number[], k: number): number {
  let windowSize = 0

  for (let i = 0; i < k; i++) {
    windowSize += nums[i]
  }

  let maxSum = windowSize

  for (let j = k; j < nums.length; j++) {
    const left = j - k

    windowSize -= nums[left]
    windowSize += nums[j]

    maxSum = Math.max(windowSize, maxSum)
  }

  return maxSum
}

const nums = [1, 2, 3, 7, 4, 1]
const k = 3

console.log(subarraySumFixed(nums, k))
