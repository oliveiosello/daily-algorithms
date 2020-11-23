// i 2 lls
// o 1 ll
// c build constructor
//   inputs sorted inc
// e empty lists should return empty list

// build constructor
//   use val to make val and next properties
// create head using constructor
// set current head to head
// while both lists are not null
//   if val of list one is less than val of list two
//     set curr.next to list1
//     set list1 to next
//   otherwise
//     set curr.next to list2
//     set list2 to next
//   set curr to next
// if list one is not null
//   curr.next = list1
// otherwise if list2 is not null
//   curr.next = list2
// return head.next

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (list1, list2) => {
  let head = new ListNode(0);
  let currNode = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    currNode = currNode.next;
  }

  if (list1) {
    currNode.next = list1;
  } else if (list2) {
    currNode.next = list2;
  }

  return head.next;
};

// let l1 = [1,2,4]
// let l2 = [1,3,4]
// console.log(mergeTwoLists(11, 12))
