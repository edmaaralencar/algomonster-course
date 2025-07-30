function moveZeroes(nums: number[]): void {
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      ;[nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
    }
  }
}

const nums = [0, 1, 0, 3, 12]

// 0 -> slow = 0
// 1 -> slow = 1 -> [1, 0, 0, 3, 12]
// 0 -> slow = 1 -> [1, 0, 0, 3, 12]
// 3 -> slow = 2 -> [1, 3, 0, 0, 12]
// 12 -> slow = 3 -> [1, 3, 12, 0, 0]

console.log(moveZeroes(nums))
