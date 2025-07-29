function maximumSubarraySum(nums: number[], k: number) {
  let set = new Set()
  let sum = 0
  let left = 0
  let max = 0

  for (let right = 0; right < nums.length; right++) {
    const currItem = nums[right]

    while (set.has(currItem)) {
      set.delete(currItem)
      sum -= currItem
      left++
    }

    set.add(currItem)
    sum += currItem

    if (right - left + 1 === k) {
      max = Math.max(max, sum)

      set.delete(nums[left])
      sum -= nums[left]
      left++
    }
  }

  console.log({
    sum,
    max,
  })
}

const nums = [1, 5, 4, 2, 9, 9, 9]
const k = 3

console.log(maximumSubarraySum(nums, k))
