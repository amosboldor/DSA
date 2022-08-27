import { SinglyCircularLinkedList } from "../../src/LinkedList/singlyCircularLinkedList";

describe("SinglyCircularLinkedList", function () {
    let scll: SinglyCircularLinkedList;
    function scllInsert(n: number, location: "h" | "t") {
        for (let data = 1; data <= n; data++) {
            if (location === "h") {
                scll.insertHead(data);
            } else {
                scll.insertTail(data);
            }
        }
    }
    function pop(rng: number, location: "h" | "t") {
        scllInsert(rng, location);
        const prev = [];
        const curr = [];
        const next = [];
        for (const interit of scll) {
            prev.push(interit.prev?.data);
            curr.push(interit.current.data);
            next.push(interit.next?.data);
        }
        return [prev, curr, next];
    }
    beforeEach(function () {
        scll = new SinglyCircularLinkedList();
    });
    it("size increments as expected", function () {
        expect(scll.size).toBe(0);
        scllInsert(3, "h");
        expect(scll.size).toBe(3);
    });
    it("head & tail are null when empty", function () {
        expect(new SinglyCircularLinkedList().head).toBeNull();
        expect(new SinglyCircularLinkedList().tail).toBeNull();
    });
    it("is iterable using insertTail", function () {
        expect(pop(5, "t")).toEqual([
            [5, 1, 2, 3, 4],
            [1, 2, 3, 4, 5],
            [2, 3, 4, 5, 1]
        ]);
    });
    it("is iterable using insertHead", function () {
        expect(pop(5, "h")).toEqual([
            [1, 5, 4, 3, 2],
            [5, 4, 3, 2, 1],
            [4, 3, 2, 1, 5]
        ]);
    });
    describe("insertHead", function () {
        it("adds node at the head when SinglyCircularLinkedList is empty", function () {
            scllInsert(1, "h");
            expect(scll.size).toBe(1);
            expect(scll.head).toBe(scll.tail);
            expect(scll.head!.data).toBe(1);
        });
        it("adds node at the head when SinglyCircularLinkedList has one node", function () {
            scllInsert(2, "h");
            expect(scll.size).toBe(2);
            expect(scll.head!.data).toBe(2);
            expect(scll.head!.next).toBe(scll.tail);
            expect(scll.tail!.data).toBe(1);
        });
        it("adds node at the head when SinglyCircularLinkedList has two(or)more node", function () {
            scllInsert(3, "h");
            expect(scll.size).toBe(3);
            expect(scll.head!.data).toBe(3);
            expect(scll.head!.next!.data).toBe(2);
            expect(scll.head!.next!.next).toBe(scll.tail);
            expect(scll.tail!.data).toBe(1);
        });
    });
    describe("insertTail", function () {
        it("adds node at the tail when SinglyCircularLinkedList is empty", function () {
            scllInsert(1, "t");
            expect(scll.size).toBe(1);
            expect(scll.tail).toBe(scll.head);
            expect(scll.tail!.data).toBe(1);
        });
        it("adds node at the tail when SinglyCircularLinkedList has one node", function () {
            scllInsert(2, "t");
            expect(scll.size).toBe(2);
            expect(scll.head!.data).toBe(1);
            expect(scll.head!.next).toBe(scll.tail);
            expect(scll.tail!.data).toBe(2);
        });
        it("adds node at the tail when SinglyCircularLinkedList has two(or)more node", function () {
            scllInsert(3, "t");
            expect(scll.size).toBe(3);
            expect(scll.head!.data).toBe(1);
            expect(scll.head!.next!.data).toBe(2);
            expect(scll.head!.next!.next).toBe(scll.tail);
            expect(scll.tail!.data).toBe(3);
        });
    });
});