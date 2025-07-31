function reverseWords(s: string): string {
  const cleanedList = s.replace(/\s+/g, ' ').trim().split(' ')

  let left = 0
  let right = cleanedList.length - 1

  while (left <= right) {
    ;[cleanedList[left], cleanedList[right]] = [
      cleanedList[right],
      cleanedList[left],
    ]

    left++
    right--
  }

  return cleanedList.join(' ')
}

const s = 'a good   example'

console.log(reverseWords(s))
