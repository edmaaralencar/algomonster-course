function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  while (left <= right) {
    ;[s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}

const s = ['h', 'e', 'l', 'l', 'o']

console.log(reverseString(s))
