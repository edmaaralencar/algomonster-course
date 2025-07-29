// function lengthOfLongestSubstring(s: string): number {
//   let length = 0
//   let windowSize = 0
//   let maxSize = 0

//   const arr: string[] = []

//   for (let i = 0; i < s.length; i++) {
//     const character = s[i]

//     console.log(arr.includes(character), i, windowSize, character, arr)

//     if (arr.includes(character)) {
//       arr.splice(0, i)
//       windowSize -= i
//     }

//     windowSize++
//     arr.push(character)
//     maxSize = Math.max(maxSize, windowSize)
//   }

//   console.log({ arr })
//   // for (let i = 0; i < s.length; i++) {
//   //   const character = s[i]
//   //   console.log(set)

//   //   if (set.has(character)) {
//   //     set.delete(character)
//   //     windowSize--
//   //   }

//   //   windowSize++
//   //   set.add(character)
//   //   maxSize = Math.max(maxSize, windowSize)
//   // }

//   console.log({ windowSize, maxSize })
// }

function lengthOfLongestSubstring(s: string): number {
  let windowSize = 0
  let maxSize = 0

  const set = new Set<string>()

  for (let i = 0; i < s.length; i++) {
    const character = s[i]

    console.log(set)

    while (set.has(character)) {
      set.delete(s[windowSize])
      windowSize++
    }

    set.add(character)
    maxSize = Math.max(maxSize, i - windowSize + 1)
  }

  return maxSize
}

console.log(lengthOfLongestSubstring('pwwkew'))
