import { Node, LinkedList } from "./LinkedList";

class SinglyCircularLinkedList<T = any> extends LinkedList<T, Node<T>> {

    insertHead(data: T) {
        const newHead = new Node<T>(data);
        if (this.head) {
            const oldhead = this.head;
            this.head = newHead;
            this.head.next = oldhead;
            if (this.size > 1) {
                this.tail!.next = this.head;
            }
        } else {
            this.head = newHead;
            this.tail = newHead;
        }
        this.size++;
    }

    insertTail(data: T) {
        const newNode = new Node<T>(data);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            if (this.size > 1) {
                this.tail.next = this.head;
            }
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    *[Symbol.iterator]() {
        let prev = null;
        let curNode = this.head;
        let idx = 0;
        while (curNode) {
            if (!idx) {
                prev = this.tail;
            }
            yield {
                idx: idx++,
                prev: prev,
                current: curNode,
                next: curNode.next
            };
            if (idx !== 0) {
                prev = curNode;
            }
            if (curNode === this.tail) {
                break;
            }
            curNode = curNode.next;
        }
    }
}

export { SinglyCircularLinkedList }