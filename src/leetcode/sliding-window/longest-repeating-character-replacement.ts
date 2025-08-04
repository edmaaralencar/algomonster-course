function characterReplacement(s: string, k: number): number {
  let left = 0
  let maxFreq = 0
  let longest = 0

  const frequency: Record<string, number> = {}

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right]

    frequency[currentChar] = (frequency[currentChar] ?? 0) + 1

    maxFreq = Math.max(maxFreq, frequency[currentChar])

    if (maxFreq + k < right - left + 1) {
      frequency[s[left]]--
      left++
    }

    longest = Math.max(longest, right - left + 1)
  }

  return longest
}

// const s = 'AABA'
// const k = 0
// const s = 'ABAB'
// const k = 2
const s = 'AABABBA'
const k = 1

console.log(characterReplacement(s, k))
