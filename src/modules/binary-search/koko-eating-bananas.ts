function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = Math.max(...piles)
  let minEatingSpeedPerHour = -1

  function feasible(piles: number[], h: number, eatingSpeedPerHour: number) {
    let hoursUsed = 0

    for (const pile of piles) {
      hoursUsed += Math.ceil(pile / eatingSpeedPerHour)
    }

    return hoursUsed <= h
  }

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (feasible(piles, h, mid)) {
      right = mid - 1
      minEatingSpeedPerHour = mid
    } else {
      left = mid + 1
    }
  }

  return minEatingSpeedPerHour
}

const piles = [3, 6, 7, 11]
const h = 8

console.log(minEatingSpeed(piles, h))
