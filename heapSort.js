/*
Heap sort O(N*LogN)
Heapsort is a comparison based sorting technique baseed on Binary Heap data structure.

It runs in O(n log n).
O(1) space.
Binary Heap: is a complete Binary Tree where the root element can be the smallest (This is called Min Binary Heap) or the biggest one (Max Binary Heap).

Complete Binary Tree: binary tree with all the levels full, expect possibily the last and all nodes are as far left as possible.

Viewing a heap as tree, we define the height of a node in a heap to be the number of edges on the longest simple downward path from the node to a lead.

Height of an Heap: Height of the root element.

https://www.geeksforgeeks.org/heap-sort/
https://www.geeksforgeeks.org/binary-heap/

*/

// for any index of an array n
// left child is stored at 2n + 1
// right child is at 2n + 2

// for any child node at index n
// its parent is at index (n-1)/2

// [4, 10, 3, 5, 1]

// TODO: get this to actually work

const heapify = (arr) => {
    let root;
    let lastNodeIdx = Math.floor((arr.length/2)-1); // this throws a stack overflow

    if (arr[lastNodeIdx] > arr[0]) {
        [arr[0], arr[lastNodeIdx]] = [arr[lastNodeIdx], arr[0]];
        root = arr[0];
        console.log(arr);
        lastNodeIdx--;
    }

    return heapify(arr);

    // I just. don't. get it.

}

// console.log(heapify([4, 10, 3, 5, 1]));
console.log(heapify([1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]));