function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1]
  }

  function findLeftPosition() {
    let left = 0
    let right = nums.length - 1
    let lastLeftPos = -1

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)

      if (nums[mid] >= target) {
        lastLeftPos = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return lastLeftPos
  }

  function findRightPosition() {
    let left = 0
    let right = nums.length - 1
    let lastRightPos = -1

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)

      if (nums[mid] === target) {
        lastRightPos = mid
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return lastRightPos
  }

  const left = findLeftPosition()
  const right = findRightPosition()

  if (left === -1 || right === -1) {
    return [-1, -1]
  }

  return [left, right]
}

const nums = [5, 7, 7, 8, 8, 10]
const target = 6
// const nums = [3, 3, 3]
// const target = 3

console.log(searchRange(nums, target))
