import { Nullable, TwoWayNode, LinkedList } from "./LinkedList";

class DoublyLinkedList<T> extends LinkedList<T> {
    public override head: Nullable<TwoWayNode<T>> = null;
    public override tail: Nullable<TwoWayNode<T>> = null;

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
}

export { DoublyLinkedList }