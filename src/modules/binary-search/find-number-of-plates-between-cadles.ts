function findNumberOfPlatesBetweenCadles(
  str: string,
  queries: [number, number][],
) {
  const candles = str.split('').filter((item) => item === '|')

  for (const [qLeft, qRight] of queries) {
    const left = 0
    const right = str.length - 1

    console.log({
      qLeft,
      qRight,
      left,
      right,
    })

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)

      console.log(str[mid])

      break
    }
  }
}

const s = '**|**|***|'
const queries = [
  [2, 5],
  [5, 9],
] as [number, number][]

console.log(findNumberOfPlatesBetweenCadles(s, queries))
