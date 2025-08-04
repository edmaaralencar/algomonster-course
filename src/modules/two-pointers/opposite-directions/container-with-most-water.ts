function containerWithMostWater(heights: number[]): number {
  let left = 0
  let right = heights.length - 1
  let maxArea = 0

  while (left < right) {
    const distanceBetweenPoints = right - left
    const minimumValue = Math.min(heights[left], heights[right])

    const area = distanceBetweenPoints * minimumValue
    maxArea = Math.max(maxArea, area)

    if (heights[left] > heights[right]) {
      right++
    } else {
      left++
    }
  }

  return maxArea
}

const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(containerWithMostWater(nums))
