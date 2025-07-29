function sortedSquares(nums: number[]): number[] {
  const n = nums.length
  let squares = Array(n).fill(0)
  let left = 0
  let right = nums.length - 1
  let highestSquareIdx = nums.length - 1

  while (left <= right) {
    let leftSquare = nums[left] * nums[left]
    let rightSquare = nums[right] * nums[right]

    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare
      left++
    } else {
      squares[highestSquareIdx] = rightSquare
      right -= 1
    }

    highestSquareIdx--
  }

  return squares
}

const nums = [-4, -1, 0, 3, 10]

console.log(sortedSquares(nums))
