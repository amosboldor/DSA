type Nullable<T> = T | null;

class Node<T> {
    public next: Nullable<Node<T>> = null;
    constructor(public data: T) {}
}

class TwoWayNode<T> extends Node<T> {
    public override next: Nullable<TwoWayNode<T>> = null;
    public prev: Nullable<TwoWayNode<T>> = null;
}

abstract class LinkedList<T, TNODE extends { next: Nullable<TwoWayNode<T> | Node<T>>, prev?: Nullable<TwoWayNode<T> | Node<T>>, data: T }> {
    public size: number = 0;
    public head: Nullable<TNODE> = null;
    public tail: Nullable<TNODE> = null;

    clear() {
        this.size = 0;
        this.head = this.tail = null;
    }

    abstract [Symbol.iterator](): IterableIterator<{
        idx: number;
        prev: Nullable<TNODE>;
        current: TNODE;
        next: Nullable<TNODE>;
    }>;

    toArray(): T[] {
        const LinkedListArray = [];
        for (const interit of this) {
            LinkedListArray.push(interit.current.data);
        }
        return LinkedListArray;
    }
}

export { Nullable, Node, TwoWayNode, LinkedList }