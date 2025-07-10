class MyCalendar {
  bookings: number[][] = []

  constructor() {}

  book(startTime: number, endTime: number): boolean {
    if (this.bookings.length === 0) {
      this.bookings.push([startTime, endTime])
      return true
    }

    let left = 0
    let right = this.bookings.length - 1

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      const [s, e] = this.bookings[mid]

      if (s < endTime && e > startTime) return false

      if (startTime >= e) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    this.bookings.splice(left, 0, [startTime, endTime])

    return true
  }
}

const myCalendar = new MyCalendar()
myCalendar.book(47, 50)
myCalendar.book(33, 41)
myCalendar.book(39, 45)

console.log(myCalendar.bookings)
