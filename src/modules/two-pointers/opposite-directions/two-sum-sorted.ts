function twoSumSorted(arr: number[], target: number): number[] {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const sum = arr[left] + arr[right]

    if (sum === target) {
      return [left, right]
    }

    if (sum > target) {
      right--
    }

    if (sum < target) {
      left++
    }
  }

  return []
}

const nums = [2, 3, 4, 5, 8, 11, 18]
const target = 8

console.log(twoSumSorted(nums, target))
