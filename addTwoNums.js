
 // Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

// i two nodes
// o linked list of sums
// c lls might not be same length
//.  add in reverse (carry to right)
//.  ll structure: nested objs
//.  can recurse?
//.  need to track remainder
// e 

// create result obj
// create remainder storage

const addTwoNumbers = function(link1, link2) {
   let linkedList = new ListNode(0);
   let curr = linkedList;
   
   let remainder = 0;
   
   while (link1 !== null || link2 !== null) {
       link1 = link1 || new ListNode(0);
       link2 = link2 || new ListNode(0);
       let added = link1.val + link2.val + remainder;
       if (added >= 10) {
           added = added - 10;
           remainder = 1;
       } else {
           remainder = 0;
       }
       
       link1 = link1.next;
       link2 = link2.next;
       
       curr.next = new ListNode(added);
       curr = curr.next;
   }
   
   if (remainder) {
       curr.next = new ListNode(remainder);
   }
   return linkedList.next;
};

// console.log(addTwoNumbers([2,4,3], [5,6,4]))
// console.log(addTwoNumbers([0], [0]))