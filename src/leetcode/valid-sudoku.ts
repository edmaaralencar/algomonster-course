function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const rowDuplicates = new Set<string>()
    for (let j = 0; j < board.length; j++) {
      const item = board[i][j]

      if (rowDuplicates.has(item)) {
        return false
      }

      if (item !== '.') {
        rowDuplicates.add(item)
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    const columnDuplicates = new Set<string>()
    for (let j = 0; j < board.length; j++) {
      const item = board[j][i]

      if (columnDuplicates.has(item)) {
        return false
      }

      if (item !== '.') {
        columnDuplicates.add(item)
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const duplicates = new Set()
      for (let i2 = 0; i2 < 3; i2++) {
        for (let j2 = 0; j2 < 3; j2++) {
          const row = i * 3 + i2
          const col = j * 3 + j2
          const item = board[row][col]

          console.log({
            row,
            col,
          })

          if (duplicates.has(item)) {
            return false
          }

          if (item !== '.') {
            duplicates.add(item)
          }
        }
      }
    }
  }

  return true
}

const errorBoard = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
]

console.log(isValidSudoku(errorBoard))
