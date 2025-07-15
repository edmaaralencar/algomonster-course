// class SnapshotArray {
//   snaps: number[][][]
//   snapId: number

//   constructor(length: number) {
//     this.snaps = Array.from({ length }, () => [[0, -1]])
//     this.snapId = 0
//   }

//   set(index: number, val: number): void {
//     this.snaps[index].push([val, this.snapId])
//   }

//   snap(): number {
//     this.snapId++

//     return this.snapId - 1
//   }

//   get(index: number, snap_id: number): number {
//     let left = 0
//     let right = this.snaps[index].length - 1
//     let pos = -1

//     while (left <= right) {
//       const mid = left + Math.floor((right - left) / 2)

//       if (this.snaps[index][mid][1] <= snap_id) {
//         left = mid + 1
//         pos = mid
//       } else {
//         right = mid - 1
//       }
//     }

//     return this.snaps[index][pos][0]
//   }
// }

class SnapshotArray {
  snaps: Map<number, [number, number][]>
  snapId: number

  constructor(length: number) {
    this.snaps = new Map()
    this.snapId = 0

    for (let i = 0; i < length; i++) {
      this.snaps.set(i, [])
    }
  }

  set(index: number, val: number): void {
    const snap = this.snaps.get(index)

    if (snap) {
      snap.push([index, val])
    }
  }

  snap(): number {
    this.snapId++

    return this.snapId - 1
  }

  get(index: number, snapId: number): number {
    const snap = this.snaps.get(index)

    if (snap) {
      return snap[snap?.length - snapId - 1][1]
    }

    return -1
  }
}

const snapshotArray = new SnapshotArray(1)

snapshotArray.set(0, 4)
snapshotArray.set(0, 16)
snapshotArray.set(0, 13)
console.log(snapshotArray.snap())
console.log(snapshotArray.get(0, 0))

// console.log(snapshotArray.snaps)
