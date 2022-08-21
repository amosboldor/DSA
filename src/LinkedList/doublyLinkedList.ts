import { TwoWayNode, LinkedList } from "./LinkedList";

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