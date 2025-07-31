function increasingTriplet(nums: number[]): boolean {
  let smaller = Number.MAX_SAFE_INTEGER
  let bigger = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]

    console.log({ cur, smaller, bigger, i })

    if (cur <= smaller) {
      smaller = cur
      continue
    }

    if (cur <= bigger) {
      bigger = cur
      continue
    }

    return true
  }
  return false
}
const nums = [2, 1, 5, 0, 4, 6]

console.log(increasingTriplet(nums))
