function removeKthLinkedListNode(head, k){
  if (head === null){
    return null
  }
  else{
    let node = head;
    let prevNode = null;
    let count = 0;

    // Traverse list and delete every k-th node 
    while(node){
      count++
      // Check if count is equal to k 
      // If yes, then delete current Node 
      if (k === count){
        prev.next = node.next;

        count = 0
      }
      // Update prev if count is not 0
      if (count !== 0){
        prev = node
      }

      node = prev.next
    }
  }
  return head
}