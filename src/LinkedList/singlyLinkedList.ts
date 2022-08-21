import { Nullable, Node, LinkedList } from "./LinkedList";

class SinglyLinkedList<T = any> extends LinkedList<T, Node<T>> {

    insertHead(data: T) {
        const newNode = new Node<T>(data);
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

    insertTail(data: T) {
        const newNode = new Node<T>(data);
        if (!this.size) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    insertIndex(index: number, data: T) {
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
                    const newNode = new Node<T>(data);
                    newNode.next = iterit.current;
                    iterit.prev!.next = newNode;
                    this.size++;
                }
            }
        }
    }

    removeHead(): Node<T> {
        const deleted = this.head;
        this.ifSizeDelHelper({
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

    removeTail(): Node<T> {
        const deleted = this.tail;
        this.ifSizeDelHelper({
            if2: ()=>{
                this.head!.next = null;
                this.tail = this.head;
                this.size--;
            },
            if3orMr: ()=>{
                for (const iterit of this) {
                    let node = iterit.current;
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

    removeIndex(index: number): Node<T> {
        this.ifEmptyThrow();
        let deleted: Node<T>;
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
                    deleted = iterit.current;
                    iterit.prev!.next = iterit.current.next;
                    this.size--;
                }
            }
        }
        return deleted!;
    }

    findDelete(data: T): boolean {
        const existsContainsData = (node: Nullable<Node<T>>) => node && node.data === data;
        let deleted = this.ifSizeDelHelper({
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
                        const node = iterit.current;
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

    atIndex(index: number): Node<T> {
        this.ifEmptyThrow();
        let nodeAtIdx: Node<T>;
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
                    nodeAtIdx = iterit.current;
                }
            }
        }
        return nodeAtIdx!;
    }

    getIndexOf(data: T): number {
        this.ifEmptyThrow();
        let found = -1;
        for (const iterit of this) {
            if (iterit.current.data === data) {
                found = iterit.idx;
            }
        }
        return found;
    }

    *[Symbol.iterator]() {
        let prev = null;
        let curNode = this.head;
        let idx = 0;
        while (curNode) {
            yield {
                idx: idx++,
                prev: prev,
                current: curNode,
                next: curNode.next
            };
            if (idx !== 0) {
                prev = curNode;
            }
            curNode = curNode.next;
        }
    }
}

export { SinglyLinkedList }