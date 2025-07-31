function findMaxAverage(nums: number[], k: number): number {
  let windowSize = 0

  for (let i = 0; i < k; i++) {
    windowSize += nums[i]
  }

  let max = windowSize

  for (let j = k; j < nums.length; j++) {
    const itemToBeRemoved = j - k

    windowSize -= nums[itemToBeRemoved]
    windowSize += nums[j]

    max = Math.max(max, windowSize)
  }

  return max / k
}

const nums = [1, 12, -5, -6, 50, 3]
const k = 4

console.log(findMaxAverage(nums, k))
