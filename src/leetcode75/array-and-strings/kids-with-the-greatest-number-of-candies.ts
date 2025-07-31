function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxAmountOfCandies = Math.max(...candies)

  const result: boolean[] = []

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxAmountOfCandies) {
      result.push(true)
    } else {
      result.push(false)
    }
  }

  return result
}

const candies = [4, 2, 1, 1, 2]
const extraCandies = 1

console.log(kidsWithCandies(candies, extraCandies))
