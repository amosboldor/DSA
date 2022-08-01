type Pointer = Node | null;

class Node {
    public next: Pointer = null;
    constructor(public data: any) {}
}

class SinglyLinkedList {
    public size: number = 0;
    public head: Pointer = null;
    public tail: Pointer = null;

    insertHead(data: any) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else  {
            const tempN = this.head;
            this.head = newNode;
            this.head.next = tempN;
        }
        this.size++;
    }

    insertTail(data: any) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    [Symbol.iterator]() {
        let curNode: Pointer = this.head;
        let head = this.head;
        return {
            next() {
                if (curNode !== head) {
                    curNode = curNode!.next;
                } else {
                    curNode = head;
                }
                return {
                    value: curNode,
                    done: !curNode
                }
            }
        };
    }
}

export { Node, SinglyLinkedList }