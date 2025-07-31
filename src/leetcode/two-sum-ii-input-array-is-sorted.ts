function twoSum(numbers: number[], target: number): number[] {
  let start = 0
  let end = numbers.length - 1

  while (start <= end) {
    const sum = numbers[start] + numbers[end]

    if (sum === target) {
      return [start + 1, end + 1]
    } else if (sum > target) {
      end = end - 1
    } else {
      start = start + 1
    }
  }

  return []
}

const numbers = [2, 7, 11, 15]
const target = 9

console.log(twoSum(numbers, target))
