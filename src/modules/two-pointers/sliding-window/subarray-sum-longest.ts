function subarraySumLongest(nums: number[], target: number): number {
  let left = 0
  let sum = 0
  let max = 0

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]

    while (sum > target) {
      sum -= nums[left]
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

const nums = [1, 6, 3, 1, 2, 4, 5]
const target = 10

console.log(subarraySumLongest(nums, target))
