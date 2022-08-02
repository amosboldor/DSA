import { Node, SinglyLinkedList } from "../src/singlyLinkedList";

describe("Node", function(){
    it("has data property", function(){
        expect(new Node(1).data).toBe(1);
    });
    it("has null next (node) property", function(){
        expect(new Node(1).next).toBeNull();
    });
    it("has correct Node in next property", function(){
        const x = new Node(2);
        const y = new Node(1);
        y.next = x;
        expect(y.next).toBeInstanceOf(Node);
        expect(y.next).toBe(x);
    });
});

describe("SinglyLinkedList", function(){
    it("size increments as expected", function(){
        const sll = new SinglyLinkedList();
        expect(sll.size).toBe(0);
        sll.insertHead(1);
        sll.insertHead(2);
        sll.insertHead(3);
        expect(sll.size).toBe(3);
    });
    it("head & tail are null when empty", function(){
        expect(new SinglyLinkedList().head).toBeNull();
        expect(new SinglyLinkedList().tail).toBeNull();
    });
    it("insertHead adds node at the head", function(){
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
    it("insertTail adds node at the tail", function(){
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
    it("is iterable", function(){
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
    it("clear method clears the list", function(){
        const sll = new SinglyLinkedList();
        sll.insertTail(1);
        sll.insertHead(2);
        sll.insertHead(3);
        sll.clear()
        expect(sll.head).toBeNull();
        expect(sll.tail).toBeNull();
        expect(sll.size).toBe(0);
    });
    describe("delete method finds/deletes first node matching data and returns deleted(bool)", function(){
        it("deletes node when only one exists", function(){
            const sll = new SinglyLinkedList();
            sll.insertHead(1);
            expect(sll.delete(1)).toBeTrue();
            expect(sll.head).toBeNull();
            expect(sll.tail).toBeNull();
            expect(sll.size).toBe(0);
        });
        it("deletes node(head) when only two node exists", function(){
            const sll = new SinglyLinkedList();
            sll.insertHead(1);
            sll.insertHead(2);
            expect(sll.delete(2)).toBeTrue();
            expect(sll.head).toBeTruthy();
            expect(sll.tail).toBeTruthy();
            expect(sll.head).toBe(sll.tail);
            expect(sll.head!.data).toBe(1);
            expect(sll.size).toBe(1);
        });
        it("deletes node(tail) when only two node exists", function(){
            const sll = new SinglyLinkedList();
            sll.insertHead(1);
            sll.insertHead(2);
            expect(sll.delete(1)).toBeTrue();
            expect(sll.head).toBeTruthy();
            expect(sll.tail).toBeTruthy();
            expect(sll.head).toBe(sll.tail)
            expect(sll.head!.data).toBe(2);
            expect(sll.size).toBe(1);
        });
        it("returns false and doesn't delete if data asked to delete doesn't exist", function(){
            const sll = new SinglyLinkedList();
            sll.insertHead(1);
            sll.insertHead(2);
            expect(sll.size).toBe(2);
            expect(sll.delete(6)).toBeFalse();
            expect(sll.size).toBe(2);
        });
        it("deletes node(head) when three or more nodes exist", function(){
            const sll = new SinglyLinkedList();
            sll.insertHead(1);
            sll.insertHead(2);
            sll.insertHead(3);
            sll.insertHead(4);
            sll.insertHead(5);
            expect(sll.delete(5)).toBeTrue();
            expect(sll.head!.data).toBe(4);
        });
        it("deletes node(middle) when three or more nodes exist", function(){
            const sll = new SinglyLinkedList();
            sll.insertHead(1);
            sll.insertHead(2);
            sll.insertHead(3);
            sll.insertHead(4);
            sll.insertHead(5);
            expect(sll.delete(1)).toBeTrue();
            expect(sll.tail!.data).toBe(2);
        });
        it("deletes node(tail) when three or more nodes exist", function(){
            const sll = new SinglyLinkedList();
            sll.insertHead(1);
            sll.insertHead(2);
            sll.insertHead(3);
            sll.insertHead(4);
            sll.insertHead(5);
            expect(sll.delete(3)).toBeTrue();
            expect(sll.head!.next!.data).toBe(4);
            expect(sll.head!.next!.next!.data).toBe(2);
        });
    });
});