type Nullable<T> = T | null;

class Node<T> {
    public next: Nullable<Node<T>> = null;
    constructor(public data: T) {}
}

class TwoWayNode<T> extends Node<T> {
    public override next: Nullable<TwoWayNode<T>> = null;
    public prev: Nullable<TwoWayNode<T>> = null;
}

interface IfSizeDelHelperParam<T> {
    data?: T,
    if2?: Function | null,
    if3orMr?: Function | null
}

abstract class LinkedList<T, TNODE extends { next: Nullable<TwoWayNode<T> | Node<T>>, prev?: Nullable<TwoWayNode<T> | Node<T>>, data: T }> {
    public size: number = 0;
    public head: Nullable<TNODE> = null;
    public tail: Nullable<TNODE> = null;

    protected ifSizeDelHelper({data, if2, if3orMr}: IfSizeDelHelperParam<T>): boolean {
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

    protected ifEmptyThrow() {
        if (!this.size) {
            throw new Error(`${this.constructor['name']} is empty`);
        }
    }

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