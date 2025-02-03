/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function hasCycle(head: ListNode | null): boolean {
    const visited: Map<ListNode, boolean> = new Map();
    while (head) {
        const isVisited = visited.get(head);
        if (isVisited) return true;
        else visited.set(head, true);
        head = head.next;
    }
    return false;
};

const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(hasCycle(a));
