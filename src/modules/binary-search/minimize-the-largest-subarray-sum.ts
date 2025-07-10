function minimizeTheLargestSubarraySum(nums: number[], k: number): number {
  let left = Math.max(...nums)
  let right = nums.reduce((acc, item) => acc + item, 0)
  let answer = -1

  function feasible(nums: number[], k: number, max: number) {
    let sumPerSubarray = 0
    let workersAmount = 0

    for (const num of nums) {
      if (sumPerSubarray + num > max) {
        sumPerSubarray = num
        workersAmount++
      } else {
        sumPerSubarray += num
      }
    }

    if (sumPerSubarray !== 0) {
      workersAmount++
    }

    return workersAmount <= k
  }

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (feasible(nums, k, mid)) {
      right = mid - 1
      answer = mid
    } else {
      left = mid + 1
    }
  }

  return answer
}

// minimzar a soma do maior subarray

// 7, 2, 5 = 14; 10, 8 = 18
// 7, 2 = 9; 5, 10, 8 = 23

const nums = [7, 2, 5, 10, 8]
const k = 2

console.log(minimizeTheLargestSubarraySum(nums, k))
