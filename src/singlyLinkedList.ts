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
        if (!this.size) {
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
        if (!this.size) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    delete(data: any): boolean {
        const existsContainsData = (node: Pointer) => node && node.data === data;
        let deleted = false;
        if (this.size > 2) {
            if (this.head!.data === data) {
                this.head = this.head!.next;
                deleted = true;
            }
            let beforeNode: Pointer = this.head!;
            let nextNode: Pointer = beforeNode.next;
            while (nextNode) {
                if (existsContainsData(nextNode)) {
                    if (nextNode === this.tail) {
                        beforeNode!.next = null;
                        this.tail = beforeNode;
                    } else {
                        beforeNode!.next = nextNode!.next;
                    }
                    deleted = true;
                }
                beforeNode = nextNode;
                nextNode = nextNode!.next;
            }
        } else if (this.size === 2) {
            if (existsContainsData(this.head)) {
                this.head = this.tail;
                deleted = true;
            } else if (existsContainsData(this.tail)) {
                this.tail = this.head;
                deleted = true;
            }
        } else if (this.size === 1 && existsContainsData(this.head)) {
            this.head = this.tail = null;
            deleted = true;
        }
        return deleted ? Boolean(this.size--) : false;
    }

    clear() {
        this.size = 0;
        this.head = this.tail = null;
    }

    *[Symbol.iterator]() {
        let curNode: Pointer = this.head;
        while (curNode) {
            yield curNode.data
            curNode = curNode.next;
        }
    }
}

export { Node, SinglyLinkedList }