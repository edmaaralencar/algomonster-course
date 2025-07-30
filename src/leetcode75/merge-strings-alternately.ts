function mergeAlternately(word1: string, word2: string): string {
  let str = ''

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (word1[i]) str += word1[i]
    if (word2[i]) str += word2[i]
  }

  return str
}

const word1 = 'abcd'
const word2 = 'pq'

console.log(mergeAlternately(word1, word2))
