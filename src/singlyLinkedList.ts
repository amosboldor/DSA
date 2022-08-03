type Pointer = Node | null;

class Node {
    public next: Pointer = null;
    constructor(public data: any) {}
}

class SinglyLinkedList {
    public size: number = 0;
    public head: Pointer = null;
    public tail: Pointer = null;

    private delHelper = (f1: Function, f2: Function, f3: Function) => {
        if (this.size > 2) {
            f1();
        } else if (this.size === 2) {
            f2();
        } else {
            f3();
        }
    }

    insertHead(data: any) {
        const newNode = new Node(data);
        if (!this.size) {
            this.head = newNode;
            this.tail = newNode;
        } else {
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

    deleteHead() {
        this.delHelper(()=>{
            this.head = this.head!.next;
            this.size--;
        },()=>{
            this.head = this.tail;
            this.size--;
        },()=>{
            this.clear();
        });
    }

    deleteTail() {
        this.delHelper(()=>{
            for (const node of this) {
                if (node.next === this.tail) {
                    node.next = null;
                    this.tail = node;
                    this.size--;
                }
            }
        },()=>{
            this.head!.next = null;
            this.tail = this.head;
            this.size--;
        },()=>{
            this.clear();
        });
    }

    delete(data: any): boolean {
        const existsContainsData = (node: Pointer) => node && node.data === data;
        let deleted = false;
        this.delHelper(()=>{
            if (existsContainsData(this.head)) {
                this.head = this.head!.next;
                deleted = true;
            }
            let beforeNode: Pointer = this.head;
            let nextNode: Pointer = beforeNode!.next;
            while (nextNode && beforeNode) {
                if (existsContainsData(nextNode)) {
                    if (nextNode === this.tail) {
                        beforeNode.next = null;
                        this.tail = beforeNode;
                    } else {
                        beforeNode.next = nextNode.next;
                    }
                    deleted = true;
                }
                beforeNode = nextNode;
                nextNode = nextNode.next;
            }
        },()=>{
            if (existsContainsData(this.head)) {
                this.head = this.tail;
                deleted = true;
            } else if (existsContainsData(this.tail)) {
                this.tail = this.head;
                deleted = true;
            }
        },()=>{
            if (existsContainsData(this.head)) {
                this.head = this.tail = null;
                deleted = true;
            }
        });
        return deleted ? Boolean(this.size--) : false;
    }

    clear() {
        this.size = 0;
        this.head = this.tail = null;
    }

    *[Symbol.iterator]() {
        let curNode: Pointer = this.head;
        while (curNode) {
            yield curNode
            curNode = curNode.next;
        }
    }
}

export { Node, SinglyLinkedList }