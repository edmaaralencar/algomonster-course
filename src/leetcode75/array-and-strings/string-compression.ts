function compress(chars: string[]): number {
  let write = 0
  let size = 0

  for (let i = 0; i < chars.length; i++) {
    const character = chars[i]
    const nextCharacter = chars[i + 1]

    size++

    if (character !== nextCharacter) {
      chars[write] = character

      if (size === 1) {
        write += 1
      } else if (size < 10) {
        chars[write + 1] = String(size)
        write += 2
      } else {
        const str = String(size).split('')
        let length = str.length

        for (let j = 0; j <= str.length; j++) {
          chars[write + 1 + j] = str[j]
        }
        write += length + 1
      }
      size = 0
    }
  }

  return write
}

// const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
// const chars = ['a']
const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']

console.log(compress(chars))
