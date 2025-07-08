const newspapersReadTimes = [7, 2, 5, 10, 8]
const numCoworkers = 2

function feasible(
  newspapersReadTimes: number[],
  numCoworkers: number,
  mid: number,
) {
  let time = 0
  let numWorkers = 0

  for (const readTime of newspapersReadTimes) {
    if (time + readTime > mid) {
      time = 0
      numWorkers += 1
    }

    time += readTime
  }

  if (time !== 0) {
    numWorkers++
  }

  return numWorkers <= numCoworkers
}

function newspapersSplit(newspapersReadTimes: number[], numCoworkers: number) {
  let low = Math.max(...newspapersReadTimes)
  let high = newspapersReadTimes.reduce((acc, item) => acc + item, 0)
  let ans = -1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (feasible(newspapersReadTimes, numCoworkers, mid)) {
      ans = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return ans
}

console.log(newspapersSplit(newspapersReadTimes, numCoworkers))
