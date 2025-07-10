function moveZeros(nums: number[]) {
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      ;[nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
    }
  }

  return nums
}

const input = [1, 0, 2, 0, 0, 7]

console.log(moveZeros(input))
