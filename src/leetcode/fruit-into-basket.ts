function totalFruit(fruits: number[]): number {
  let left = 0
  let max = 0

  const map = new Map<number, number>()

  for (let right = 0; right < fruits.length; right++) {
    const num = fruits[right]
    map.set(num, (map.get(num) ?? 0) + 1)

    while (map.size > 2) {
      const leftFruit = fruits[left]
      map.set(leftFruit, (map.get(leftFruit) ?? 0) - 1)

      if (map.get(leftFruit) === 0) {
        map.delete(leftFruit)
      }

      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

// const fruits = [1, 2, 1]
// const fruits = [0, 1, 2, 2]
// const fruits = [1, 2, 3, 2, 2]
// const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]

console.log(totalFruit(fruits))
