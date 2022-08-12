# **Linked List**

A linear data structure contains nodes, and each node has a pointer to the next /or prior (depending on the type) node in the list.

**Three types of Linked List exist:**

- Singly Linked List
- Doubly Linked List
- Circular Linked List

## Singly Linked List

The simplest of the three; only consists of nodes with only one pointer to the next node.

I decided to also have a *tail* property on the singlyLinkedList class but, in doing so, created a lot more code complexity than if I just had the *head* property. The benefit is that you can append a node to the end of the list without looping to the second to last O(n) to set the pointer. The drawback might be that you need more space to store the *tail pointer* and more logic for some insert and delete methods to update the *tail pointer* at the right time.

## SinglyLinkedList

**Methods**

- insertHead
  
  - Creates a *node* from given *data* and prepends(add to the start)

- insertTail
  
  - Creates a *node* from given *data* and appends(add to the end)

- insertIndex
  
  - Given a valid *index*, it inserts a *node* with the given *data* into that slot and makes the *node* that was there the *next* node.

- removeHead
  
  - Delete and return *head* node.

- removeTail
  
  - Delete and return *tail* node.

- removeIndex
  
  - Given a valid *index*, it deletes and returns the *node* at the given index.

- findDelete
  
  - Searches list with given *data* value and deletes *node* if found.

- atIndex
  
  - Returns *node* at the given *index*.

- getIndexOf
  
  - Searches list with given *data* value and return the *index* of that *node*.

- clear
  
  - empties the list

- toArray
  
  - Returns *Linked List* as an array.

- log
  
  - Prints a formatted JSON representation of the current *Link List*.

**Properties**

- size
  
  - The number of *nodes* in the list.

- head
  
  - First Node

- tail
  
  - Last Node

It also implements a [Symbol.iterator] to loop through the list using "for...of".
