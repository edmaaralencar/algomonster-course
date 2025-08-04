function findAllAnagrams(original: string, check: string) {
  const checkFrequency: Record<string, number> = {}
  const windowFrequency: Record<string, number> = {}

  for (let i = 0; i < check.length; i++) {
    checkFrequency[check[i]] = (checkFrequency[check[i]] ?? 0) + 1
  }

  const results = []

  function areWindowsEqual(
    check: Record<string, number>,
    window: Record<string, number>,
  ) {
    const checkList = Object.keys(check)
    const windowList = Object.keys(window)

    if (checkList.length !== windowList.length) return false

    for (const key of checkList) {
      if (check[key] !== window[key]) {
        return false
      }
    }

    return true
  }

  for (let i = 0; i < original.length; i++) {
    const char = original[i]

    windowFrequency[char] = (windowFrequency[char] ?? 0) + 1

    if (i >= check.length) {
      windowFrequency[original[i - check.length]] -= 1

      if (windowFrequency[original[i - check.length]] === 0) {
        delete windowFrequency[original[i - check.length]]
      }
    }

    if (areWindowsEqual(checkFrequency, windowFrequency)) {
      results.push(i - check.length + 1)
    }
  }

  return results
}

const original = 'cbaebabacd'
const check = 'abc'

console.log(findAllAnagrams(original, check))
