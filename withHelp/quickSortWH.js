const quick_sort = (arr, start=0, end=arr.length-1) => {
    if (start < end) {
        let pivotIdx = randomPivot(start, end); // index of pivot value to be chosen inclusively between the start and end subarray values
        
        let pivot = quick_help(arr, start, end, pivotIdx); // pivot is the returned index of the value next to the lowest determined value
        
        quick_sort(arr, start, pivot-1);
        quick_sort(arr, pivot+1, end);
    }
    
    return arr;
}

const randomPivot = (start, end) => {
    return Math.floor(Math.random() * (end-start)) + start; // random index in the subarray
}

const quick_help = (arr, start, end, pivotIdx) => {
    let pivotValue = arr[pivotIdx]; // value at the pivot index in the subarray
    
    [arr[end], arr[pivotIdx]] = [arr[pivotIdx], arr[end]]; // swap the last value in the subarray with the pivot value --> WHY?
    
    let i = start; // i is the start index of the subarray
    
    for (let j = start; j < end; j++) {
        if (arr[j] < pivotValue) { // if the first value in subarray is less than the pivot value that is at the end
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap the lower value with first value in the subarray
            i++; // increase the "lowest" index by 1 (I would name i "lowestIdx")
        }
    }
    
    [arr[i], arr[end]] = [arr[end], arr[i]]; // swap the value next to the lowest value in the subarray with the value at the end index --> WHY?
    
    return i; // return the index for the value next to the determined lowest value
}