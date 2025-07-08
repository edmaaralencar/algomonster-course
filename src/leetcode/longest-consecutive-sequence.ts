function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)
  let maxLength = 0

  for (const number of set) {
    if (!set.has(number - 1)) {
      let length = 1

      while (set.has(number + length)) {
        length++
      }

      maxLength = Math.max(maxLength, length)
    }
  }

  return maxLength
}

const nums = [100, 4, 200, 1, 3, 2]

console.log(longestConsecutive(nums))
