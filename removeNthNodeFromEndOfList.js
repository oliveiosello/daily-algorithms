// i ll, num
// o ll
// c need to determine lenght of entire list
// e empty list

// create length tracker
// while head isn't null
//   increment length
//   move to next node
// subtract n from length to get new end point
// reset list using dummy
// while length is greater than zero
//   decrement length
//   move to next node
// remove remaining nodes
// return edited list

const removeNthFromEnd = (head, n) => {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let len = 0;

  let current = head;

  while (current) {
    len++;
    current = current.next;
  }

  len -= n;
  current = dummyHead;

  while (len > 0) {
    len--;
    current = current.next;
  }

  current.next = current.next.next;
  return dummyHead.next;
};

//   console.log(removeNthFromEnd([1,2,3,4,5], 2))
