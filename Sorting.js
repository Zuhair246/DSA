let input = [9,1,8,0,2,7,6,3,1,5];

//Bubble Sort
function bubbleSort(arr) {
    let swaped;
    for(let i=0; i<arr.length; i++) {
        swaped = false;
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swaped = true;
            }
        }
        if(!swaped) break;
    }
    return arr;
}
//console.log(bubbleSort(input));

//Insertion Sort
function insertionSort (arr) {
    for(let i=1; i<arr.length; i++) {
        let temp = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
//console.log(insertionSort(input));

// Selection sort
function SelectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let min = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[i] , arr[min]] = [arr[min] , arr[i]];
    }
    return arr;
}
//console.log(SelectionSort(input));

//Quick Sort
function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i]<pivot) left.push(arr[i]);
        else right.push(arr[i]); 
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log(quickSort(input));

//Merge Sort

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
function merge(left, right) {
    let result = [];
    let i=0, j=0;
    while ( i<left.length && j<right.length ) {
        if(left[i] < right[j]) {
            result.push(left[i++]);
        }else{
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
// console.log(mergeSort(input));

const string = ['zuhair', 'ahmed', 'irshad', 'fayiz', 'ashwin']
// console.log(mergeSort(string));

function validParanthesis (str) {
    let chars = [];
    let inputs = { 
        '}':'{',
        ')':'(',
        ']':'['
    }
    for(let i of str) {
        if(['(', '{', '['].includes(i)) chars.push(i);
        else if (chars.pop() !== inputs[i]) return false;
    }
    return chars.length===0;
}

//console.log(validParanthesis('{()[]}'));


let inputs = [1,4,5,2,3,7,8,0,9];
let array = ['zuhair','ahmed','savad','qaiz','ajmalath','labeeba'];


function quickSort(arr) {
    if(arr.length === 0) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [5,9,3,1,4,8,6,2,7,0,78,35,45,12,23,79,35,21];

function sortMiddle(arr) {
    let mid = Math.floor(arr.length/2);
    let start = Math.max(0, mid-5);
    let end = Math.min(arr.length, mid+5);
    return [...arr.slice(0, start), ...quickSort(arr.slice(start, end)), ...arr.slice(end)];
}
//console.log(sortMiddle(arr));

//Insert a element to a sorted array, without breaking order.
function insertSorted(arr, k) {
    arr.push(k);
    let i = arr.length-2;
    while(i>=0 && arr[i]>k) {
        arr[i+1] = arr[i];
        i--;
    }
    arr[i+1] = k;
    return arr;
}
const arr2 = [1, 2, 2, 4, 6, 5, 7, 8];
console.log(insertSorted(arr2, 3));