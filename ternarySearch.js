/*
Ternary Search

Is a divide and Conque algorith,
It works on sorted array
Similar to Binary Search but instead two split the array in two, it splits it in three.

https://github.com/omonimus1/competitive-programming/blob/master/Lectures/data-structures/Lecture03.md#ternary-search

Question to ponder: When is it better to store/track an index of an array vs its value? Depends......

Steps to perform Ternary Search: 

First, we compare the key with the element at mid1. If found equal, we return mid1.
If not, then we compare the key with the element at mid2. If found equal, we return mid2.
If not, then we check whether the key is less than the element at mid1. If yes, then recur to the first part.
If not, then we check whether the key is greater than the element at mid2. If yes, then recur to the third part.
If not, then we recur to the second (middle) part.



*/

// [5,6,7,8,9,10,11,12,13,14] example

const ternarySearch = (arr, num) => {
    let leftIdx = 0;
    let rightIdx = arr.length-1;

    // base cases but this might be bad/not optimized
    if (arr.length <= 0) {
        return -1;
    } else if (arr.length == 1) {
        if (arr[0] == num) {
            return 0;
        } else {
            return -1;
        }
    } else if (arr.length <= 4) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return num;
            }
        }
    }
                    
    let firstMidIdx = leftIdx + Math.floor((rightIdx-leftIdx))/3; // 3
    let secondMixIdx = firstMidIdx + Math.floor((rightIdx-leftIdx))/3; // 6
    
    if (arr[firstMidIdx] == num) {
        return firstMidIdx;
    } else if (arr[secondMixIdx] == num) {
        return secondMixIdx;
    }

    if (arr[firstMidIdx] > num) {
        console.log('lower search ' + arr);
        return ternarySearch(arr.slice(0, firstMidIdx));
    } else if (arr[secondMixIdx] > num) {
        console.log('middle search ' + arr);
        return ternarySearch(arr.slice(firstMidIdx, secondMixIdx));
    } else {
        console.log('higher search ' + arr);
        return ternarySearch(arr.slice(secondMixIdx));
    }
}

console.log(ternarySearch([5,6,7,8,9,10,11,12,13,14], 12));