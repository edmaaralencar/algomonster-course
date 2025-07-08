function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      map.set(nums[i], map.get(nums[i])! + 1)
    }
  }

  const arr = Array.from(map)

  arr.sort((a, b) => b[1] - a[1])

  return arr.slice(0, k).map((item) => item[0])
}

// const nums = [1, 1, 1, 2, 2, 3]
// const k = 2
// const nums = [-1, -1]
// const k = 1
const nums = [4, 1, -1, 2, -1, 2, 3]
const k = 2

console.log(topKFrequent(nums, k))
