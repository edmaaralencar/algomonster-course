function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left <= right) {
    const distanceBetweenPoints = right - left
    const minimumValue = Math.min(height[left], height[right])

    const currentArea = distanceBetweenPoints * minimumValue

    maxArea = Math.max(currentArea, maxArea)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}

// function maxAreaBruteForce(height: number[]): number {
//   let maxArea = 0

//   for (let i = 0; i < height.length; i++) {
//     for (let j = 0; j < height.length; j++) {
//       const distanceBetweenPoints = j - i
//       const minimumValue = Math.min(height[i], height[j])

//       const currentArea = distanceBetweenPoints * minimumValue

//       maxArea = Math.max(currentArea, maxArea)
//     }
//   }

//   return maxArea
// }

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(height))
