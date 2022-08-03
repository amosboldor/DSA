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
    it("insertHead adds node at the head", function(){
        sllInsert(4, "h");
        expect(sll.head!.data).toBe(4);
        expect(sll.head!.next!.data).toBe(3);
        expect(sll.head!.next!.next!.data).toBe(2);
        expect(sll.tail!.data).toBe(1);
    });
    it("insertTail adds node at the tail", function(){
        sllInsert(4, "t");
        expect(sll.head!.data).toBe(1);
        expect(sll.head!.next!.data).toBe(2);
        expect(sll.head!.next!.next!.data).toBe(3);
        expect(sll.tail!.data).toBe(4);
    });
    it("is iterable", function(){
        sllInsert(4, "t");
        let n = 1;
        for (const iterit of sll) {
            const node = iterit.node;
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
    describe("delete method finds/deletes first node matching data", function(){
        it("deletes node(head/tail) when only one node exist", function(){
            sll.insertHead(1);
            expect(sll.delete(1)).toBeTrue();
            expect(sll.head).toBeNull();
            expect(sll.tail).toBeNull();
            expect(sll.size).toBe(0);
        });
        it("deletes node(head) when only two node exist", function(){
            sllInsert(2, "h");
            expect(sll.delete(2)).toBeTrue();
            expect(sll.head).toBeTruthy();
            expect(sll.tail).toBeTruthy();
            expect(sll.head).toBe(sll.tail);
            expect(sll.head!.data).toBe(1);
            expect(sll.size).toBe(1);
        });
        it("deletes node(tail) when only two node exist", function(){
            sllInsert(2, "h");
            expect(sll.delete(1)).toBeTrue();
            expect(sll.head).toBeTruthy();
            expect(sll.tail).toBeTruthy();
            expect(sll.head).toBe(sll.tail)
            expect(sll.head!.data).toBe(2);
            expect(sll.size).toBe(1);
        });
        it("returns false when doesn't find data to delete", function(){
            sllInsert(2, "h");
            expect(sll.size).toBe(2);
            expect(sll.delete(6)).toBeFalse();
            expect(sll.size).toBe(2);
        });
        it("deletes node(head) when three or more nodes exist", function(){
            sllInsert(5, "h");
            expect(sll.delete(5)).toBeTrue();
            expect(sll.head!.data).toBe(4);
        });
        it("deletes node(middle) when three or more nodes exist", function(){
            sllInsert(5, "h");
            expect(sll.delete(1)).toBeTrue();
            expect(sll.tail!.data).toBe(2);
        });
        it("deletes node(tail) when three or more nodes exist", function(){
            sllInsert(5, "h");
            expect(sll.delete(3)).toBeTrue();
            expect(sll.head!.next!.data).toBe(4);
            expect(sll.head!.next!.next!.data).toBe(2);
        });
    });
    describe("deleteHead deletes node(head)", function(){
        it("when only one node exist", function(){
            sllInsert(1, "h");
            sll.deleteHead();
            expect(sll.size).toBe(0);
            expect(sll.head).toBe(sll.tail);
            expect(sll.head).toBeNull();
        });
        it("when only two node exist", function(){
            sllInsert(2, "h");
            sll.deleteHead();
            expect(sll.size).toBe(1);
            expect(sll.head).toBe(sll.tail);
            expect(sll.head!.data).toBe(1);
        });
        it("when three or more nodes exist", function(){
            sllInsert(4, "h");
            sll.deleteHead();
            expect(sll.size).toBe(3);
            expect(sll.head!.data).toBe(3);
            expect(sll.head!.next!.data).toBe(2);
            expect(sll.tail!.data).toBe(1);
        });
    });
    describe("deleteTail deletes node(tail)", function(){
        it("when only one node exist", function(){
            sllInsert(1, "h");
            sll.deleteTail();
            expect(sll.size).toBe(0);
            expect(sll.tail).toBe(sll.head);
            expect(sll.tail).toBeNull();
        });
        it("when only two node exist", function(){
            sllInsert(2, "h");
            sll.deleteTail();
            expect(sll.size).toBe(1);
            expect(sll.head).toBe(sll.tail);
            expect(sll.tail!.data).toBe(2);
        });
        it("when three or more nodes exist", function(){
            sllInsert(4, "h");
            sll.deleteTail();
            expect(sll.size).toBe(3);
            expect(sll.head!.data).toBe(4);
            expect(sll.head!.next!.data).toBe(3);
            expect(sll.tail!.data).toBe(2);
        });
    });
});