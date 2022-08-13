type Nullable<T> = T | null;

class Node {
    public next: Nullable<Node> = null;
    constructor(public data: any) {}
}

class TwoWayNode extends Node {
    public override next: Nullable<TwoWayNode> = null;
    public preceding: Nullable<TwoWayNode> = null;
}

class LinkedList {
    public size: number = 0;
    public head: Nullable<Node> = null;
    public tail: Nullable<Node> = null;

    /* c8 ignore next 3 */
    log () {
        console.log(JSON.stringify(this.head, null, 4))
    }

    clear() {
        this.size = 0;
        this.head = this.tail = null;
    }

    *[Symbol.iterator](): IterableIterator<{ idx: number; prevNode: Nullable<Node | TwoWayNode>; node: Node; }> {
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

class TwoWayLinkedList extends LinkedList {
    public override head: Nullable<TwoWayNode> = null;
    public override tail: Nullable<TwoWayNode> = null;
}

export { Nullable, Node, TwoWayNode, LinkedList, TwoWayLinkedList }