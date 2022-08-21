import { DoublyLinkedList } from "../../src/LinkedList/doublyLinkedList";

describe("DoublyLinkedList", function(){
    let dll: DoublyLinkedList;
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
            expect(dll.tail!.prev!.data).toBe(2);
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
    it("toArray returns array of DoublyLinkedList", function(){
        dllInsert(3, "t");
        expect(dll.toArray()).toEqual([1, 2, 3]);
    });
    describe("insert(idx, data)", function(){
        it("throws RangeError when index out of range", function(){
            expect(()=>{dll.insertIndex(10, 1)}).toThrowError(RangeError, "Index out of Range");
        });
        it("adds node at index 0(head) when DoublyLinkedList is empty", function(){
            dll.insertIndex(0, 1);
            expect(dll.size).toBe(1);
            expect(dll.head).toBe(dll.tail);
            expect(dll.head!.data).toBe(1);
        });
        it("adds node at index last(tail)", function(){
            dllInsert(2, "t");
            const d = "last";
            dll.insertIndex(1, d);
            expect(dll.size).toBe(3);
            expect(dll.head!.next!.next!.data).toBe(d);
            expect(dll.tail!.prev!.prev!.data).toBe(1);
            expect(dll.tail!.data).toBe(d);
        });
        it("adds node at index middle", function(){
            dllInsert(5, "t");
            dll.insertIndex(2, "middle");
            expect(dll.size).toBe(6);
            const curr = [];
            const prev = [];
            const next = [];
            for (const interit of dll) {
                prev.push(interit.prev?.data);
                curr.push(interit.current.data);
                next.push(interit.next?.data);
            }
            expect(curr).toEqual([1,2,"middle",3,4,5]);
            expect(prev).toEqual([undefined,1,2,"middle",3,4]);
            expect(next).toEqual([2,"middle",3,4,5,undefined]);
        });
    });
    describe("removeHead", function(){
        it("throws error when empty", function(){
            expect(()=>{dll.removeHead()}).toThrowError("DoublyLinkedList is empty");
        });
        it("deletes node(head) when only one node exist", function(){
            dllInsert(1, "h");
            expect(dll.removeHead().data).toBe(1);
            expect(dll.size).toBe(0);
            expect(dll.head).toBe(dll.tail);
            expect(dll.head).toBeNull();
        });
        it("deletes node(head) when only two node exist", function(){
            dllInsert(2, "h");
            expect(dll.removeHead().data).toBe(2);
            expect(dll.size).toBe(1);
            expect(dll.head).toBe(dll.tail);
            expect(dll.head!.data).toBe(1);
            expect(dll.head!.prev).toBeNull();
            expect(dll.head!.next).toBeNull();
        });
        it("deletes node(head) when three or more nodes exist", function(){
            dllInsert(4, "h");
            expect(dll.removeHead().data).toBe(4);
            expect(dll.size).toBe(3);
            expect(dll.head!.data).toBe(3);
            expect(dll.head!.next!.data).toBe(2);
            expect(dll.tail!.prev).toBe(dll.head!.next);
            expect(dll.tail!.data).toBe(1);
        });
    });
    describe("removeTail", function(){
        it("throws error when empty", function(){
            expect(()=>{dll.removeTail()}).toThrowError("DoublyLinkedList is empty");
        });
        it("deletes node(tail) when only one node exist", function(){
            dllInsert(1, "h");
            expect(dll.removeTail().data).toBe(1);
            expect(dll.size).toBe(0);
            expect(dll.tail).toBe(dll.head);
            expect(dll.tail).toBeNull();
        });
        it("deletes node(tail) when only two node exist", function(){
            dllInsert(2, "h");
            expect(dll.removeTail().data).toBe(1);
            expect(dll.size).toBe(1);
            expect(dll.head).toBe(dll.tail);
            expect(dll.tail!.data).toBe(2);
            expect(dll.head!.prev).toBeNull();
            expect(dll.head!.next).toBeNull();
        });
        it("deletes node(tail) when three or more nodes exist", function(){
            dllInsert(4, "h");
            expect(dll.removeTail().data).toBe(1);
            expect(dll.size).toBe(3);
            expect(dll.head!.data).toBe(4);
            expect(dll.head!.next!.data).toBe(3);
            expect(dll.head!.next).toBe(dll.tail!.prev);
            expect(dll.tail!.data).toBe(2);
        });
    });
});