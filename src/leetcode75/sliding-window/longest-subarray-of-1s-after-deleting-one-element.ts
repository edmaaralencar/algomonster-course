function longestSubarray(nums: number[]): number {
  let zeroCount = 0
  let left = 0
  let max = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++

    if (zeroCount > 1) {
      if (nums[left] === 0) zeroCount--
      left++
    }

    max = Math.max(max, right - left)
  }

  return max
}

const nums = [1, 1, 0, 1]

// 1 iteração: zeroCount = 0, right = 0, left = 0
// 2 iteração: zeroCount = 0, right = 1, left = 0
// 3 iteração: zeroCount = 1, right = 2, left = 0
// 4 iteração: zeroCount = 1, right = 3, left = 0
// right - left = 3 - 0

// nums = [0,1,1,1,0,1,1,0,1]
// 1 iteração: zeroCount = 1, right = 0, left = 0, max = 0
// 2 iteração: zeroCount = 1, right = 1, left = 0, max = 1
// 3 iteração: zeroCount = 1, right = 2, left = 0, max = 2
// 4 iteração: zeroCount = 1, right = 3, left = 0, max = 3
// 5 iteração: zeroCount = 2, right = 4, left 0 -> zeroCount = 1, right = 4, left = 1, max = 3
// 6 iteração: zeroCount = 1, right = 5, left = 1, max = 4
// 7 iteração: zeroCount = 1, right = 6, left = 1, max = 5
// 8 iteração: zeroCount = 2, right = 7, left = 1 -> zeroCount = 1, right = 7, left = 2, max = 5
// 9 iteração: zeroCount = 1, right = 8, left = 2, max = 8 -2 = 6

console.log(longestSubarray(nums))
