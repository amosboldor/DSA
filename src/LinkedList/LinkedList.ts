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
}

export { Nullable, Node, TwoWayNode, LinkedList }