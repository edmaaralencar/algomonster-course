function maxVowels(s: string, k: number): number {
  let windowSize = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      windowSize++
    }
  }

  let max = windowSize

  for (let j = k; j < s.length; j++) {
    const toBeDeleted = j - k

    if (vowels.includes(s[toBeDeleted])) {
      windowSize--
    }

    if (vowels.includes(s[j])) {
      windowSize++
    }

    max = Math.max(windowSize, max)
  }

  return max
}

const s = 'abciiidef'
const k = 3

console.log(maxVowels(s, k))
