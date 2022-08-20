import { DoublyLinkedList } from "../../src/LinkedList/doublyLinkedList";

describe("DoublyLinkedList", function(){
    let dll: DoublyLinkedList<any>;
    function dllInsert(n: number, location: "h" | "t") {
        for (let data = 1; data <= n; data++) {
            if (location === "h") {
                dll.insertHead(data);
            } else {
                dll.insertTail(data);
            }
        }
    }
    beforeEach(function() {
        dll = new DoublyLinkedList();
    });
    it("size increments as expected", function(){
        expect(dll.size).toBe(0);
        dllInsert(3, "h");
        expect(dll.size).toBe(3);
    });
    describe("insertHead", function(){
        it("adds node at the head when DoublyLinkedList is empty", function(){
            dllInsert(1, "h");
            expect(dll.size).toBe(1);
            expect(dll.head).toBe(dll.tail);
            expect(dll.head!.data).toBe(1);
        });
        it("adds node at the head when DoublyLinkedList has one node", function(){
            dllInsert(2, "h");
            expect(dll.size).toBe(2);
            expect(dll.head!.data).toBe(2);
            expect(dll.head!.next).toBe(dll.tail);
            expect(dll.tail!.prev).toBe(dll.head);
            expect(dll.tail!.data).toBe(1);
        });
        it("adds node at the head when DoublyLinkedList has two(or)more node", function(){
            dllInsert(3, "h");
            expect(dll.size).toBe(3);
            expect(dll.head!.data).toBe(3);
            expect(dll.head!.next!.data).toBe(2);
            expect(dll.head!.next!.next).toBe(dll.tail);
            expect(dll.tail!.prev!.prev).toBe(dll.head);
            expect(dll.tail!.data).toBe(1);
        });
    });
    describe("insertTail", function(){
        it("adds node at the tail when DoublyLinkedList is empty", function(){
            dllInsert(1, "t");
            expect(dll.size).toBe(1);
            expect(dll.tail).toBe(dll.head);
            expect(dll.tail!.data).toBe(1);
        });
        it("adds node at the tail when DoublyLinkedList has one node", function(){
            dllInsert(2, "t");
            expect(dll.size).toBe(2);
            expect(dll.head!.data).toBe(1);
            expect(dll.tail!.prev).toBe(dll.head);
            expect(dll.head!.next).toBe(dll.tail);
            expect(dll.tail!.data).toBe(2);
        });
        it("adds node at the tail when DoublyLinkedList has two(or)more node", function(){
            dllInsert(3, "t");
            expect(dll.size).toBe(3);
            expect(dll.head!.data).toBe(1);
            expect(dll.head!.next!.data).toBe(2);
            expect(dll.head!.next!.next).toBe(dll.tail);
            expect(dll.tail!.prev!.prev).toBe(dll.head);
            expect(dll.tail!.data).toBe(3);
        });
    });
    it("is (for...of) Iterable", function(){
        const xa = [];
        dllInsert(5, "t");
        for (const interit of dll) {
            xa.push(interit.current.data);
        }
        expect(xa).toEqual([1,2,3,4,5]);
    });
});