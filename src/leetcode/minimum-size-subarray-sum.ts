function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0
  let index = 0
  let min = Infinity

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    while (sum >= target) {
      min = Math.min(min, i - index + 1)
      sum -= nums[index]
      index++
    }
  }

  return min
}

const target = 7
const nums = [2, 3, 1, 2, 4, 3]
// const target = 11
// const nums = [1, 2, 3, 4, 5]

console.log(minSubArrayLen(target, nums))
