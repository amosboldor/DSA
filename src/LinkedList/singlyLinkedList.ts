import { Nullable, Node, LinkedList } from "./LinkedList";

interface IfSizeHelperParam {
    data?: any,
    if2?: Function | null,
    if3orMr?: Function | null
}

class SinglyLinkedList extends LinkedList {

    private ifSizeHelper({data, if2, if3orMr}: IfSizeHelperParam): boolean {
        this.ifEmptyThrow();
        if(this.size === 1) {
            if (data) {
                if (this.head!.data === data) {
                    this.head = this.tail = null;
                    return true;
                }
            } else {
                this.clear();
            }
        } else if (if2 && this.size === 2) {
            return if2();
        } else if (if3orMr && this.size >= 3) {
            return if3orMr();
        }
        return false;
    }

    private ifEmptyThrow() {
        if (!this.size) {
            throw new Error("SinglyLinkedList is empty");
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

    removeHead(): Node {
        const deleted = this.head;
        this.ifSizeHelper({
            if2: ()=>{
                this.head = this.tail;
                this.size--;
            },
            if3orMr: ()=>{
                this.head = this.head!.next;
                this.size--;
            }
        });
        return deleted!;
    }

    removeTail(): Node {
        const deleted = this.tail;
        this.ifSizeHelper({
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
        return deleted!;
    }

    removeIndex(index: number): Node {
        this.ifEmptyThrow();
        let deleted: Node;
        if (index === 0) {
            // if idx -> first
            deleted = this.removeHead();
        } else if (index >= this.size || index < 0) {
            throw new RangeError("Index out of Range");
        } else if (index === this.size - 1) {
            // if idx -> last
            deleted = this.removeTail();
        } else {
            // if idx -> middle
            for (const iterit of this) {
                if (iterit.idx === index) {
                    deleted = iterit.node;
                    iterit.prevNode!.next = iterit.node.next;
                    this.size--;
                }
            }
        }
        return deleted!;
    }

    findDelete(data: any): boolean {
        const existsContainsData = (node: Nullable<Node>) => node && node.data === data;
        let deleted = this.ifSizeHelper({
            data: data,
            if2: ()=>{
                if (existsContainsData(this.head)) {
                    this.head = this.tail;
                    return true;
                } else if (existsContainsData(this.tail)) {
                    this.tail = this.head;
                    return true;
                }
                return false;
            },
            if3orMr: ()=>{
                if (existsContainsData(this.head)) {
                    this.head = this.head!.next;
                    return true;
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
                            return true;
                        }
                    }
                }
                return false;
            }
        });
        return deleted ? Boolean(this.size--) : false;
    }

    atIndex(index: number): Node {
        this.ifEmptyThrow();
        let nodeAtIdx: Node;
        if (index === 0) {
            // if idx -> first
            nodeAtIdx = this.head!;
        } else if (index >= this.size || index < 0) {
            throw new RangeError("Index out of Range");
        } else if (index === this.size - 1) {
            // if idx -> last
            nodeAtIdx = this.tail!;
        } else {
            // if idx -> middle
            for (const iterit of this) {
                if (iterit.idx === index) {
                    nodeAtIdx = iterit.node;
                }
            }
        }
        return nodeAtIdx!;
    }

    getIndexOf(data: any): number {
        this.ifEmptyThrow();
        let found = -1;
        for (const iterit of this) {
            if (iterit.node.data === data) {
                found = iterit.idx;
            }
        }
        return found;
    }
}

export { Node, SinglyLinkedList }