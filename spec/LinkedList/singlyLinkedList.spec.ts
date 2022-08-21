import { SinglyLinkedList } from "../../src/LinkedList/singlyLinkedList";

describe("SinglyLinkedList", function(){
    let sll: SinglyLinkedList;
    function sllInsert(n: number, location: "h" | "t") {
        for (let data = 1; data <= n; data++) {
            if (location === "h") {
                sll.insertHead(data);
            } else {
                sll.insertTail(data);
            }
        }
    }
    beforeEach(function() {
        sll = new SinglyLinkedList();
    });
    it("size increments as expected", function(){
        expect(sll.size).toBe(0);
        sllInsert(3, "h");
        expect(sll.size).toBe(3);
    });
    it("head & tail are null when empty", function(){
        expect(new SinglyLinkedList().head).toBeNull();
        expect(new SinglyLinkedList().tail).toBeNull();
    });
    describe("insertHead", function(){
        it("adds node at the head when SinglyLinkedList is empty", function(){
            sllInsert(1, "h");
            expect(sll.size).toBe(1);
            expect(sll.head).toBe(sll.tail);
            expect(sll.head!.data).toBe(1);
        });
        it("adds node at the head when SinglyLinkedList has one node", function(){
            sllInsert(2, "h");
            expect(sll.size).toBe(2);
            expect(sll.head!.data).toBe(2);
            expect(sll.head!.next).toBe(sll.tail);
            expect(sll.tail!.data).toBe(1);
        });
        it("adds node at the head when SinglyLinkedList has two(or)more node", function(){
            sllInsert(3, "h");
            expect(sll.size).toBe(3);
            expect(sll.head!.data).toBe(3);
            expect(sll.head!.next!.data).toBe(2);
            expect(sll.head!.next!.next).toBe(sll.tail);
            expect(sll.tail!.data).toBe(1);
        });
    });
    describe("insertTail", function(){
        it("adds node at the tail when SinglyLinkedList is empty", function(){
            sllInsert(1, "t");
            expect(sll.size).toBe(1);
            expect(sll.tail).toBe(sll.head);
            expect(sll.tail!.data).toBe(1);
        });
        it("adds node at the tail when SinglyLinkedList has one node", function(){
            sllInsert(2, "t");
            expect(sll.size).toBe(2);
            expect(sll.head!.data).toBe(1);
            expect(sll.head!.next).toBe(sll.tail);
            expect(sll.tail!.data).toBe(2);
        });
        it("adds node at the tail when SinglyLinkedList has two(or)more node", function(){
            sllInsert(3, "t");
            expect(sll.size).toBe(3);
            expect(sll.head!.data).toBe(1);
            expect(sll.head!.next!.data).toBe(2);
            expect(sll.head!.next!.next).toBe(sll.tail);
            expect(sll.tail!.data).toBe(3);
        });
    });
    describe("insert(idx, data)", function(){
        it("throws RangeError when index out of range", function(){
            expect(()=>{sll.insertIndex(10, 1)}).toThrowError(RangeError, "Index out of Range");
        });
        it("adds node at index 0(head) when SinglyLinkedList is empty", function(){
            sll.insertIndex(0, 1);
            expect(sll.size).toBe(1);
            expect(sll.head).toBe(sll.tail);
            expect(sll.head!.data).toBe(1);
        });
        it("adds node at index last(tail) when SinglyLinkedList", function(){
            sllInsert(2, "t");
            const d = "last";
            sll.insertIndex(1, d);
            expect(sll.size).toBe(3);
            expect(sll.head!.next!.next!.data).toBe(d);
            expect(sll.tail!.data).toBe(d);
        });
        it("adds node at index middle when SinglyLinkedList", function(){
            sllInsert(5, "t");
            sll.insertIndex(2, "middle");
            expect(sll.size).toBe(6);
            expect(sll.head!.data).toBe(1);
            expect(sll.head!.next!.data).toBe(2);
            expect(sll.head!.next!.next!.data).toBe("middle");
            expect(sll.head!.next!.next!.next!.data).toBe(3);
            expect(sll.head!.next!.next!.next!.next!.data).toBe(4);
            expect(sll.tail!.data).toBe(5);
        });
    });
    describe("removeIndex", function(){
        it("throws error when empty", function(){
            expect(()=>{sll.removeIndex(1)}).toThrowError("SinglyLinkedList is empty");
        });
        it("throws RangeError when index out of range", function(){
            sll.insertHead(1);
            expect(()=>{sll.removeIndex(10)}).toThrowError(RangeError, "Index out of Range");
        });
        it("deletes node at index 0(head) when SinglyLinkedList has one node", function(){
            sllInsert(1, "h");
            sll.removeIndex(0);
            expect(sll.size).toBe(0);
            expect(sll.head).toBe(sll.tail);
            expect(sll.head).toBe(null);
        });
        it("deletes node at index last(tail) when SinglyLinkedList has at least two nodes", function(){
            sllInsert(3, "t");
            sll.removeIndex(2);
            expect(sll.size).toBe(2);
            expect(sll.head!.data).toBe(1);
            expect(sll.head!.next!.data).toBe(2);
            expect(sll.tail!.data).toBe(2);
        });
        it("deletes node at index middle when SinglyLinkedList", function(){
            sllInsert(5, "t");
            sll.removeIndex(2);
            expect(sll.size).toBe(4);
            expect(sll.head!.data).toBe(1);
            expect(sll.head!.next!.data).toBe(2);
            expect(sll.head!.next!.next!.data).toBe(4);
            expect(sll.tail!.data).toBe(5);
        });
        it("deletes and returns node at index", function(){
            sllInsert(7, "h");
            expect(sll.removeIndex(3).data).toEqual(4);
            expect(sll.size).toBe(6);
        });
    });
    it("is iterable", function(){
        sllInsert(4, "t");
        let n = 1;
        for (const iterit of sll) {
            const node = iterit.current;
            expect(node.data).toBe(n);
            n++;
        }
    });
    it("clear method clears the list", function(){
        sllInsert(3, "h");
        sllInsert(4, "t");
        sll.clear()
        expect(sll.head).toBeNull();
        expect(sll.tail).toBeNull();
        expect(sll.size).toBe(0);
    });
    describe("findDelete", function(){
        it("throws error when empty", function(){
            expect(()=>{sll.findDelete(1)}).toThrowError("SinglyLinkedList is empty");
        });
        it("deletes node(head/tail) when only one node exist", function(){
            sll.insertHead(1);
            expect(sll.findDelete(1)).toBeTrue();
            expect(sll.head).toBeNull();
            expect(sll.tail).toBeNull();
            expect(sll.size).toBe(0);
        });
        it("deletes node(head) when only two node exist", function(){
            sllInsert(2, "h");
            expect(sll.findDelete(2)).toBeTrue();
            expect(sll.head).toBeTruthy();
            expect(sll.tail).toBeTruthy();
            expect(sll.head).toBe(sll.tail);
            expect(sll.head!.data).toBe(1);
            expect(sll.size).toBe(1);
        });
        it("deletes node(tail) when only two node exist", function(){
            sllInsert(2, "h");
            expect(sll.findDelete(1)).toBeTrue();
            expect(sll.head).toBeTruthy();
            expect(sll.tail).toBeTruthy();
            expect(sll.head).toBe(sll.tail)
            expect(sll.head!.data).toBe(2);
            expect(sll.size).toBe(1);
        });
        it("returns false when doesn't find data to delete with size 2", function(){
            sllInsert(2, "h");
            expect(sll.size).toBe(2);
            expect(sll.findDelete(6)).toBeFalse();
            expect(sll.size).toBe(2);
        });
        it("returns false when doesn't find data to delete with size 3 or more", function(){
            sllInsert(6, "h");
            expect(sll.size).toBe(6);
            expect(sll.findDelete(9)).toBeFalse();
            expect(sll.size).toBe(6);
        });
        it("deletes node(head) when three or more nodes exist", function(){
            sllInsert(5, "h");
            expect(sll.findDelete(5)).toBeTrue();
            expect(sll.head!.data).toBe(4);
        });
        it("deletes node(middle) when three or more nodes exist", function(){
            sllInsert(5, "h");
            expect(sll.findDelete(1)).toBeTrue();
            expect(sll.tail!.data).toBe(2);
        });
        it("deletes node(tail) when three or more nodes exist", function(){
            sllInsert(5, "h");
            expect(sll.findDelete(3)).toBeTrue();
            expect(sll.head!.next!.data).toBe(4);
            expect(sll.head!.next!.next!.data).toBe(2);
        });
    });
    describe("removeHead", function(){
        it("throws error when empty", function(){
            expect(()=>{sll.removeHead()}).toThrowError("SinglyLinkedList is empty");
        });
        it("deletes node(head) when only one node exist", function(){
            sllInsert(1, "h");
            expect(sll.removeHead().data).toBe(1);
            expect(sll.size).toBe(0);
            expect(sll.head).toBe(sll.tail);
            expect(sll.head).toBeNull();
        });
        it("deletes node(head) when only two node exist", function(){
            sllInsert(2, "h");
            expect(sll.removeHead().data).toBe(2)
            expect(sll.size).toBe(1);
            expect(sll.head).toBe(sll.tail);
            expect(sll.head!.data).toBe(1);
        });
        it("deletes node(head) when three or more nodes exist", function(){
            sllInsert(4, "h");
            expect(sll.removeHead().data).toBe(4);
            expect(sll.size).toBe(3);
            expect(sll.head!.data).toBe(3);
            expect(sll.head!.next!.data).toBe(2);
            expect(sll.tail!.data).toBe(1);
        });
    });
    describe("removeTail", function(){
        it("throws error when empty", function(){
            expect(()=>{sll.removeTail()}).toThrowError("SinglyLinkedList is empty");
        });
        it("deletes node(tail) when only one node exist", function(){
            sllInsert(1, "h");
            expect(sll.removeTail().data).toBe(1);
            expect(sll.size).toBe(0);
            expect(sll.tail).toBe(sll.head);
            expect(sll.tail).toBeNull();
        });
        it("deletes node(tail) when only two node exist", function(){
            sllInsert(2, "h");
            expect(sll.removeTail().data).toBe(1);
            expect(sll.size).toBe(1);
            expect(sll.head).toBe(sll.tail);
            expect(sll.tail!.data).toBe(2);
        });
        it("deletes node(tail) when three or more nodes exist", function(){
            sllInsert(4, "h");
            expect(sll.removeTail().data).toBe(1);
            expect(sll.size).toBe(3);
            expect(sll.head!.data).toBe(4);
            expect(sll.head!.next!.data).toBe(3);
            expect(sll.tail!.data).toBe(2);
        });
    });
    describe("atIndex", function(){
        it("throws error when empty", function(){
            expect(()=>{sll.atIndex(1)}).toThrowError("SinglyLinkedList is empty");
        });
        it("throws RangeError when index out of range", function(){
            sllInsert(3, "h");
            expect(()=>{sll.atIndex(10)}).toThrowError(RangeError, "Index out of Range");
        });
        it("returns node(head) when index 0", function(){
            sllInsert(3, "h");
            const theNode = sll.atIndex(0);
            expect(theNode.data).toBe(3);
            expect(sll.head).toBe(theNode);
        });
        it("returns node(tail) when last index", function(){
            sllInsert(3, "h");
            const theNode = sll.atIndex(2);
            expect(theNode.data).toBe(1);
            expect(sll.tail).toBe(theNode);
        });
        it("returns node(middle) when index middle", function(){
            sllInsert(5, "h");
            const theNode = sll.atIndex(2);
            expect(theNode.data).toBe(3);
        });
    });
    describe("getIndexOf", function(){
        it("throws error when empty", function(){
            expect(()=>{sll.getIndexOf(5)}).toThrowError("SinglyLinkedList is empty");
        });
        it("returns index -1 not in SinglyLinkedList", function(){
            sllInsert(7, "h");
            expect(sll.getIndexOf(8)).toBe(-1);
        });
        it("returns index when in SinglyLinkedList",function(){
            sllInsert(7, "h");
            expect(sll.getIndexOf(5)).toBe(2);
            expect(sll.getIndexOf(3)).toBe(4);
        });
    });
    it("toArray returns array of SinglyLinkedList", function(){
        sllInsert(3, "t");
        expect(sll.toArray()).toEqual([1, 2, 3]);
    });
});