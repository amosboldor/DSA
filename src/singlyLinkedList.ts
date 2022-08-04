type Pointer = Node | null;
interface IfSizeHelperParam {
    if0?: Function | null,
    if1?: Function | null,
    if2?: Function | null,
    if3orMr?: Function | null
}

class Node {
    public next: Pointer = null;
    constructor(public data: any) {}
}

class SinglyLinkedList {
    public size: number = 0;
    public head: Pointer = null;
    public tail: Pointer = null;

    private ifSizeHelper = ({if0, if1, if2, if3orMr}: IfSizeHelperParam) => {
        if (if0 && this.size === 0) {
            if0();
        } else if (if1 && this.size === 1) {
            if1();
        } else if (if2 && this.size === 2) {
            if2();
        } else if (if3orMr && this.size >= 3) {
            if3orMr();
        }
    }
    private delIf0 = ()=>{
        throw new Error("SinglyLinkedList is empty");
    }
    private delIf1 = ()=>{
        this.clear();
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

    insertIndex(index: number, data: any) {
        if (index === 0) {
            // if idx -> first
            this.insertHead(data);
        } else if (index >= this.size || index < 0) {
            throw new RangeError("Index out of Range");
        } else if (index === this.size - 1) {
            // if idx -> last
            this.insertTail(data);
        } else {
            // if idx -> middle
            for (const iterit of this) {
                if (iterit.idx === index) {
                    const newNode = new Node(data);
                    newNode.next = iterit.node;
                    iterit.prevNode!.next = newNode;
                    this.size++;
                }
            }
        }
    }

    deleteHead() {
        this.ifSizeHelper({
            if0: this.delIf0,
            if1: this.delIf1,
            if2: ()=>{
                this.head = this.tail;
                this.size--;
            },
            if3orMr: ()=>{
                this.head = this.head!.next;
                this.size--;
            }
        });
    }

    deleteTail() {
        this.ifSizeHelper({
            if0: this.delIf0,
            if1: this.delIf1,
            if2: ()=>{
                this.head!.next = null;
                this.tail = this.head;
                this.size--;
            },
            if3orMr: ()=>{
                for (const iterit of this) {
                    let node = iterit.node;
                    if (node.next === this.tail) {
                        node.next = null;
                        this.tail = node;
                        this.size--;
                    }
                }
            }
        });
    }

    deleteIndex(index: number) {
        if (index === 0) {
            // if idx -> first
            this.deleteHead();
        } else if (index >= this.size || index < 0) {
            throw new RangeError("Index out of Range");
        } else if (index === this.size - 1) {
            // if idx -> last
            this.deleteTail();
        } else {
            // if idx -> middle
            for (const iterit of this) {
                if (iterit.idx === index) {
                    iterit.prevNode!.next = iterit.node.next;
                    this.size--;
                }
            }
        }
    }

    findDelete(data: any): boolean {
        const existsContainsData = (node: Pointer) => node && node.data === data;
        let deleted = false;
        this.ifSizeHelper({
            if0: this.delIf0,
            if1: ()=>{
                if (existsContainsData(this.head)) {
                    this.head = this.tail = null;
                    deleted = true;
                }
            },
            if2: ()=>{
                if (existsContainsData(this.head)) {
                    this.head = this.tail;
                    deleted = true;
                } else if (existsContainsData(this.tail)) {
                    this.tail = this.head;
                    deleted = true;
                }
            },
            if3orMr: ()=>{
                if (existsContainsData(this.head)) {
                    this.head = this.head!.next;
                    deleted = true;
                } else {
                    for (const iterit of this) {
                        const node = iterit.node;
                        if (existsContainsData(node.next)) {
                            if (node.next === this.tail) {
                                node.next = null;
                                this.tail = node;
                            } else {
                                node.next = node.next!.next;
                            }
                            deleted = true;
                        }
                    }
                }
            }
        });
        return deleted ? Boolean(this.size--) : false;
    }

    clear() {
        this.size = 0;
        this.head = this.tail = null;
    }

    *[Symbol.iterator](): IterableIterator<{ idx: number; prevNode: Pointer; node: Node; }> {
        let prevNode: Pointer = null;
        let curNode: Pointer = this.head;
        let idx = 0;
        while (curNode) {
            yield {
                idx: idx,
                prevNode: prevNode,
                node: curNode
            };
            idx++;
            if (idx !== 0) {
                prevNode = curNode;
            }
            curNode = curNode.next;
        }
    }
}

export { Node, SinglyLinkedList }