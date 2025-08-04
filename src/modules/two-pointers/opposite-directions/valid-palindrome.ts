function isPalindrome(s: string): boolean {
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  let left = 0
  let right = cleaned.length - 1

  while (left <= right) {
    if (cleaned[left] === cleaned[right]) {
      left++
      right--
    } else {
      return false
    }
  }

  return true
}

const str = ' brown fox jumping over'

console.log(isPalindrome(str))

function isAlphaNumericSecondVersion(c: string): boolean {
  return /^[a-zA-Z0-9]*$/.test(c)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isPalindromeSecondVersion(s: string): boolean {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    // Note 1, 2
    while (l < r && !isAlphaNumericSecondVersion(s.charAt(l))) {
      l++
    }
    while (l < r && !isAlphaNumericSecondVersion(s.charAt(r))) {
      r--
    }
    // compare characters ignoring case
    if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {
      return false
    }
    l++
    r--
  }
  return true
}
