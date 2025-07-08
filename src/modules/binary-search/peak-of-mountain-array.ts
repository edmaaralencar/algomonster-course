const input = [0, 1, 2, 3, 4, 3, 2]

function peakOfMountainArray(arr: number[]) {
  let left = 0
  let right = arr.length - 1
  let boundaryIndex = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (arr[mid] > arr[mid + 1]) {
      boundaryIndex = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return boundaryIndex
}

console.log(peakOfMountainArray(input))
