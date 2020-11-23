// i ll
// o ll
// c
// e empty list

// set current to head
// while current and next are valid
//   check if current and next are equal
//     if so set next to next.next to delete it
//   otherwise
//     move to next
// return head

const deleteDuplicates = (head) => {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

// console.log(deleteDuplicates([1,1,2,3,3]));
