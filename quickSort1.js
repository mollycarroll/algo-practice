// status: does NOT pass IK tests

// resources: 
// https://www.geeksforgeeks.org/quick-sort/
// https://www.interviewkickstart.com/learn/quick-sort

const quick_sort = (arr, start, end) => {
    if (start < end) {
        let partitionIdx = partition(arr, start, end);
        
        quick_sort(arr, start, partitionIdx);
        quick_sort(arr, partitionIdx+1, end);
    }
    return arr;
}

const partition = (arr, start, end) => {
    let pivotIdx = randomPivot(start, end);
    let i = start-1;
    
    for (let j = start; j <= end; j++) {
        if (arr[j] < arr[pivotIdx]) {
            i++;
            swap(arr, i, j);
        }
    }
    
    swap(arr, i+1, end);
    return (i+1);
}

const randomPivot = (start, end) => {
    return Math.floor(Math.random() * (end-start)) + start;
}

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}