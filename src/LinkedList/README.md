# **Linked List**

A linear data structure contains nodes, and each node has a pointer to the next /or prior (depending on the type) node in the list.

**Three types of Linked List exist:**

- Singly Linked List
- Doubly Linked List
- Circular Linked List

---

## Node

| Property | Type          | Description                        |
| -------- | ------------- | ---------------------------------- |
| data     | number        | The number of *nodes* in the list. |
| next     | Nullable Node | The next *node* in the list.       |

## TwoWayNode

⬆️ extends Node

| Property | Type                | Description                  |
| -------- | ------------------- | ---------------------------- |
| prev     | Nullable TwoWayNode | Previous *node* in the list. |

---

## LinkedList

⬆️ Abstract class that all LinkedList types will extend from.

**GenericNode**  = Node or TwoWayNode with gData as data

**GenericData** = data of generic type defaulting to any

| Property | Type                 | Description                        |
| -------- | -------------------- | ---------------------------------- |
| size     | number               | The number of *nodes* in the list. |
| head     | Nullable GenericNode | The first node in the list.        |
| tail     | Nullable GenericNode | Last node in the list.             |

| Method     | Parameters   | Return                    | Description                                                                  |
| ---------- | ------------ | ------------------------- | ---------------------------------------------------------------------------- |
| atIndex    | index number | GenericNode               | Returns *node* at the given *index*.                                         |
| getIndexOf | GenericData  | number                    | Searches list with given *data* value and return the *index* of that *node*. |
| clear      | none         | void                      | Empties the list.                                                            |
| toArray    | none         | array of type GenericData | Returns *Linked List* as an array.                                           |

| Helper Method   | Parameters                                                             | Return                 | Description                                                                 |
| --------------- | ---------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------- |
| ifEmptyThrow    | none                                                                   | void                   | Throws a custom error if list empty.                                        |
| ifSizeDelHelper | Object containing GenericData and custom arrow functions if2 & if3orMr | boolean deleted status | Handles if list 0 or 1 and runs either if2 or if3orMr base on the list size |

This abstract class has an "for...of" `abstract [Symbol.iterator]()` so that extending classes implement the iterator in their own way and in turn, allow for (toArray, atIndex, & getIndexOf) to be placed in this class for all LinkedList types to use.

---

## SinglyLinkedList

⬆️ extends LinkedList

The simplest of the three; only consists of nodes with only one pointer to the next node.

`Node(head) ➡️ Node ➡️ Node ➡️ Node ➡️ Node(tail)`

I decided to also have a *tail* property on the SinglyLinkedList class but, in doing so, created a lot more code complexity than if I just had the *head* property. The benefit is that you can append a node to the end of the list without looping to the second to last O(n) to set the pointer. The drawback might be that you need more space to store the *tail pointer* and more logic for some insert and delete methods to update the *tail pointer* at the right time.

| Method      | Parameters   | Return                 | Description                                                                                                                          |
| ----------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| insertHead  | GenericData  | void                   | Creates a *node* from given *data* and **prepends**(add to the start)                                                                |
| insertTail  | GenericData  | void                   | Creates a *node* from given *data* and **appends**(add to the end)                                                                   |
| insertIndex | GenericData  | void                   | Given a valid *index*, it inserts a *node* with the given *data* into that slot and makes the *node* that was there the *next* node. |
| removeHead  | none         | GenericNode            | Delete and return the *head* node.                                                                                                   |
| removeTail  | none         | GenericNode            | Delete and return the *tail* node.                                                                                                   |
| removeIndex | index number | GenericNode            | Given a valid *index*, it deletes and returns the *node* at the given index.                                                         |
| findDelete  | GenericData  | boolean deleted status | Searches list with given *data* value and deletes *node* if found.                                                                   |
| log         | none         | void                   | Prints a formatted JSON representation of the current *Link List*.                                                                   |
