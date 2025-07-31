function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)

  let left = 0
  let right = nums.length - 1
  let count = 0

  while (left < right) {
    const sum = nums[left] + nums[right]

    if (sum === k) {
      count++
      left++
      right--
    } else if (sum > k) {
      right--
    } else {
      left++
    }
  }

  return count
}

const nums = [3, 1, 3, 4, 3]
const k = 6
// const nums = [1, 2, 3, 4]
// const k = 5

console.log(maxOperations(nums, k))
