type Nullable<T> = T | null;

class Node<T> {
    public next: Nullable<Node<T>> = null;
    constructor(public data: T) {}
}

class TwoWayNode<T> extends Node<T> {
    public override next: Nullable<TwoWayNode<T>> = null;
    public prev: Nullable<TwoWayNode<T>> = null;
}

class LinkedList<T> {
    public size: number = 0;
    public head: Nullable<Node<T>> = null;
    public tail: Nullable<Node<T>> = null;

    clear() {
        this.size = 0;
        this.head = this.tail = null;
    }

    *[Symbol.iterator](): IterableIterator<{ idx: number; prevNode: Nullable<Node<T> | TwoWayNode<T>>; node: Node<T> | TwoWayNode<T>; }> {
        let prevNode = null;
        let curNode = this.head;
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

    toArray(): any[] {
        const LinkedListArray = [];
        for (const interit of this) {
            LinkedListArray.push(interit.node.data);
        }
        return LinkedListArray;
    }
}

export { Nullable, Node, TwoWayNode, LinkedList }