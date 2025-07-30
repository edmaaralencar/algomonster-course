function reverseVowels(s: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const splitted = s.split('')

  let left = 0
  let right = splitted.length - 1

  while (left <= right) {
    if (vowels.includes(splitted[left]) && vowels.includes(splitted[right])) {
      ;[splitted[left], splitted[right]] = [splitted[right], splitted[left]]
      left++
      right--
    } else if (vowels.includes(splitted[left])) {
      right--
    } else if (vowels.includes(splitted[right])) {
      left++
    } else {
      left++
      right--
    }
  }

  return splitted.join('')
}

const s = 'IceCreAm'

console.log(reverseVowels(s))
