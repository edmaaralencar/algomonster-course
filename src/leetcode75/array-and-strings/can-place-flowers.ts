function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let adjacent = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
    ) {
      flowerbed[i] = 1
      adjacent++
    }
  }

  return adjacent >= n
}

// const flowerbed = [1, 0, 0, 0, 1]
// const n = 1
// const flowerbed = [1, 0, 0, 0, 0, 1]
// const n = 2
const flowerbed = [0, 0, 1, 0, 0]
const n = 1

console.log(canPlaceFlowers(flowerbed, n))
