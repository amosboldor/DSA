import { Node, SinglyLinkedList } from "../src/singlyLinkedList";

describe("Node class functions as expected", function(){
    it("Node has data property", function(){
        expect(new Node(1).data).toBe(1);
    });
    it("Node has null next (node) property", function(){
        expect(new Node(1).next).toBeNull();
    });
    it("Node has correct Node in next property", function(){
        const x = new Node(2);
        const y = new Node(1);
        y.next = x;
        expect(y.next).toBeInstanceOf(Node);
        expect(y.next).toBe(x);
    });
});

describe("SinglyLinkedList IS", function(){
    it("SinglyLinkedList size is 0", function(){
        expect(new SinglyLinkedList().size).toBe(0);
    });
    it("SinglyLinkedList head & tail are null", function(){
        expect(new SinglyLinkedList().head).toBeNull();
        expect(new SinglyLinkedList().tail).toBeNull();
    });
    it("SinglyLinkedList has 4 node in order (insertHead)", function(){
        const sll = new SinglyLinkedList();
        sll.insertHead(1);
        sll.insertHead(2);
        sll.insertHead(3);
        sll.insertHead(4);
        expect(sll.head!.data).toBe(4);
        expect(sll.head!.next!.data).toBe(3);
        expect(sll.head!.next!.next!.data).toBe(2);
        expect(sll.tail!.data).toBe(1);
    });
    it("SinglyLinkedList has 4 node in order (insertTail)", function(){
        const sll = new SinglyLinkedList();
        sll.insertTail(1);
        sll.insertTail(2);
        sll.insertTail(3);
        sll.insertTail(4);
        expect(sll.head!.data).toBe(1);
        expect(sll.head!.next!.data).toBe(2);
        expect(sll.head!.next!.next!.data).toBe(3);
        expect(sll.tail!.data).toBe(4);
    });
    it("SinglyLinkedList is iterable", function(){
        const sll = new SinglyLinkedList();
        sll.insertTail(1);
        sll.insertTail(2);
        sll.insertTail(3);
        sll.insertTail(4);
        let n = 1;
        for (let data of sll) {
            expect(data).toBe(n);
            n++;
        }
    });
});