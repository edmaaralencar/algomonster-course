class Node<T> {
  val: T
  next: Node<T> | null
  constructor(val: T, next: Node<T> | null = null) {
    this.val = val
    this.next = next
  }
}

function middleOfLinkedList(head: Node<number> | null): Node<number> | null {
  let fast = head
  let middle = head

  while (fast && fast.next) {
    fast = fast.next.next
    middle = middle?.next ?? null
  }

  return middle
}

// function middleOfLinkedListSecond(head: Node<number> | null) {
//   let temp = head
//   let totalLength = 1

//   while (temp && temp.next) {
//     temp = temp.next
//     totalLength++
//   }

//   const mid = Math.floor(totalLength / 2)

//   temp = head
//   totalLength = 0
//   let answer = null

//   while (temp && temp.next) {
//     if (totalLength === mid) {
//       answer = temp
//       break
//     }

//     totalLength++
//     temp = temp.next
//   }

//   return answer
// }

const node5 = new Node(5, null)
const node4 = new Node(4, node5)
const node3 = new Node(3, node4)
const node2 = new Node(2, node3)
const node1 = new Node(1, node2)
const linkedList = new Node(0, node1)

console.log(middleOfLinkedList(linkedList))
