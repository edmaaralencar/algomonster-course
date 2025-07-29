function removeDuplicates(arr: number[]) {
  let slow = 0

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++
      arr[slow] = arr[fast]
    }
  }
  return slow + 1
}

const nums = [0, 0, 1, 1, 1, 2, 2]

console.log(removeDuplicates(nums))
