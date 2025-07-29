function maxVowels(s: string, k: number) {
  let count = 0

  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      count++
    }
  }

  let maximumNumberOfVowels = count

  for (let j = k; j < s.length; j++) {
    const lastItem = s[j - k]

    if (vowels.includes(lastItem)) {
      count--
    }

    if (vowels.includes(s[j])) {
      count++
    }

    maximumNumberOfVowels = Math.max(count, maximumNumberOfVowels)
  }

  return maximumNumberOfVowels
}

const s = 'abciiidef'
const k = 3

console.log(maxVowels(s, k))
