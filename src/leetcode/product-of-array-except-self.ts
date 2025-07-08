function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1)

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  console.log(result)

  let suffix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log({
      suffixI: i,
      suffix,
      numI: nums[i],
    })
    result[i] *= suffix
    suffix *= nums[i]

    console.log({
      result,
    })
  }

  console.log(result)

  return []
}

const nums = [1, 2, 3, 4]

console.log(productExceptSelf(nums))
