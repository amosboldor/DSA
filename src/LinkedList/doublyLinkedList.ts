import { Nullable, TwoWayNode, LinkedList } from "./LinkedList";

class DoublyLinkedList<T = any> extends LinkedList<T, TwoWayNode<T>> {

    insertHead(data: T) {
        const newNode = new TwoWayNode<T>(data);
        if (this.head) {
            const tempN = this.head;
            tempN.prev = newNode;
            this.head = newNode;
            this.head.next = tempN;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    insertTail(data: T) {
        const newNode = new TwoWayNode<T>(data);
        if (this.tail) {
            const prevNode = this.tail;
            newNode.prev = prevNode;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
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
                    const newNode = new TwoWayNode<T>(data);
                    newNode.next = iterit.current;
                    newNode.prev = iterit.prev;
                    iterit.current.prev = newNode;
                    iterit.prev!.next = newNode;
                    this.size++;
                }
            }
        }
    }

    removeHead(): TwoWayNode<T> {
        const deleted = this.head;
        this.ifSizeDelHelper({
            if2: ()=>{
                this.head = this.tail;
                this.head!.prev = null;
                this.size--;
            },
            if3orMr: ()=>{
                this.head = this.head!.next;
                this.head!.prev = null;
                this.size--;
            }
        });
        return deleted!;
    }

    removeTail(): TwoWayNode<T> {
        const deleted = this.tail;
        this.ifSizeDelHelper({
            if2: ()=>{
                this.tail = this.head;
                this.head!.next = null;
                this.head!.prev = null;
                this.size--;
            },
            if3orMr: ()=>{
                const tempN = this.tail!.prev;
                tempN!.next = null;
                this.tail = tempN;
                this.size--;
            }
        });
        return deleted!;
    }

    removeIndex(index: number): TwoWayNode<T> {
        this.ifEmptyThrow();
        let deleted: TwoWayNode<T>;
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
                    iterit.current.next!.prev = iterit.prev;
                    iterit.prev!.next = iterit.current.next;
                    this.size--;
                }
            }
        }
        return deleted!;
    }

    findDelete(data: T): boolean {
        const existsContainsData = (node: Nullable<TwoWayNode<T>>) => node && node.data === data;
        let deleted = this.ifSizeDelHelper({
            data: data,
            if2: ()=>{
                if (existsContainsData(this.head)) {
                    this.head = this.tail;
                    this.head!.next = this.head!.prev = null;
                    return true;
                } else if (existsContainsData(this.tail)) {
                    this.tail = this.head;
                    this.tail!.next = this.tail!.prev = null;
                    return true;
                }
                return false;
            },
            if3orMr: ()=>{
                if (existsContainsData(this.head)) {
                    this.head = this.head!.next;
                    this.head!.prev = null;
                    return true;
                } else {
                    for (const iterit of this) {
                        if (existsContainsData(iterit.current)) {
                            if (iterit.current === this.tail) {
                                this.tail!.prev = null;
                                iterit.prev!.next = null;
                                this.tail = iterit.prev;
                            } else {
                                iterit.current.next = iterit.current.prev = null;
                                iterit.prev!.next = iterit.next;
                                iterit.next!.prev = iterit.prev;
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

    *[Symbol.iterator]() {
        let curNode = this.head;
        let idx = 0;
        while (curNode) {
            yield {
                idx: idx++,
                prev: curNode!.prev,
                current: curNode,
                next: curNode!.next
            };
            curNode = curNode.next;
        }
    }
}

export { DoublyLinkedList }