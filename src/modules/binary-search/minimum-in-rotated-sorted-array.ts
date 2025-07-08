const input = [3, 5, 7, 11, 13, 17, 19, 2]

function findMinRotated(arr: number[]) {
  let left = 0
  let right = arr.length - 1
  let boundaryIndex = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (arr[mid] <= arr[arr.length - 1]) {
      boundaryIndex = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return boundaryIndex
}

console.log(findMinRotated(input))
