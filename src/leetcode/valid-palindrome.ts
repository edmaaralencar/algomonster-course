function isPalindrome(s: string): boolean {
  const cleanString = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase()

  let newStr = ''

  for (let i = cleanString.length - 1; i >= 0; i--) {
    newStr += cleanString[i]
  }

  return newStr === cleanString
}

// const str = 'A man, a plan, a canal: Panama'
const str = '0P'

console.log(isPalindrome(str))
