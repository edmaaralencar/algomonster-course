function maxProfit(prices: number[]): number {
  let minCost = prices[0]
  let profit = 0

  for (let right = 0; right < prices.length; right++) {
    if (prices[right] - minCost > profit) {
      profit = prices[right] - minCost
    }

    if (prices[right] < minCost) {
      minCost = prices[right]
    }
  }

  return profit
}

function maxProfitBruteForce(prices: number[]): number {
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(profit, prices[j] - prices[i])
    }
  }

  return profit
}

const prices = [7, 1, 5, 3, 6, 4]
// const prices = [7, 6, 4, 3, 1]
// const prices = [2, 4, 1]
// const prices = [4, 1, 5, 2, 7]

console.log(maxProfitBruteForce(prices))
