const input = [2, 3, 5, 7, 11, 13, 17, 19]
const target = 6

function firstNotSmaller(arr: number[], target: number) {
  let left = 0
  let right = arr.length - 1
  let boundaryIndex = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (arr[mid] < target) {
      left = mid + 1
    } else if (arr[mid] >= target) {
      boundaryIndex = mid
      right = mid - 1
    }
  }

  return boundaryIndex
}

console.log(firstNotSmaller(input, target))
