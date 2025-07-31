function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let max = 0

  const map = new Map<string, number>()

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    map.set(char, (map.get(char) ?? 0) + 1)

    while ((map.get(char) ?? 0) > 1) {
      map.set(s[left], (map.get(s[left]) ?? 0)! - 1)
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

const str = 'tmmzuxt'

console.log(lengthOfLongestSubstring(str))
