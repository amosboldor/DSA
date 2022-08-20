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