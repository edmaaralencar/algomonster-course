function groupAnagrams(strs: string[]) {
  const map = new Map<string, string[]>()

  for (const str of strs) {
    const sortedString = str.split('').sort().join('')

    if (!map.has(sortedString)) {
      map.set(sortedString, [])
    }

    map.get(sortedString)!.push(str)
  }

  return Array.from(map.values())
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

console.log(groupAnagrams(strs))
