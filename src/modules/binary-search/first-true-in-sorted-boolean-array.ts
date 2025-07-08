const input = [false, false, true, true, true]

function findBoundary(arr: boolean[]) {
  let left = 0
  let right = arr.length - 1
  let boundaryIndex = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (arr[mid]) {
      boundaryIndex = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return boundaryIndex
}

console.log(findBoundary(input))
