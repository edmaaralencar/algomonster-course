function isSubsequence(s: string, t: string): boolean {
  let newStr = ''
  let cont = 0

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[cont]) {
      newStr += t[i]
      cont++
    }
  }

  return newStr === s
}

// const s = 'aza'
// const t = 'abzba'
const s = 'ab'
const t = 'baab'

console.log(isSubsequence(s, t))
