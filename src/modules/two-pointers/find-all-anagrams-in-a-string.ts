function findAllAnagrams(original: string, check: string) {
  function equals(arr1: number[], arr2: number[]): boolean {
    return (
      arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i])
    )
  }

  const originalLen = original.length
  const checkLen = check.length
  if (originalLen < checkLen) return []

  const res = []
  const checkCounter = Array(26).fill(0)
  const window = Array(26).fill(0)
  const a = 'a'.charCodeAt(0) // ascii value of 'a'

  console.log({
    a,
  })

  for (let i = 0; i < checkLen; i++) {
    checkCounter[check.charCodeAt(i) - a]++
    window[original.charCodeAt(i) - a]++
  }

  console.log({
    checkCounter,
    window,
  })

  if (equals(window, checkCounter)) res.push(0)

  for (let i = checkLen; i < originalLen; i++) {
    window[original.charCodeAt(i - checkLen) - a]--
    window[original.charCodeAt(i) - a]++
    if (equals(window, checkCounter)) res.push(i - checkLen + 1)
  }

  console.log(res)

  return []
}

const original = 'abab'
const check = 'ab'

console.log(findAllAnagrams(original, check))
