const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21];

function binarySearch(arr, target) {
    let lower = 0;
    let higher = arr.length-1;
    while(lower <= higher) {
        let mid = Math.floor((lower + higher) / 2);
        if(arr[mid] === target) {
            return mid;
        }else if(arr[mid] < target) {
            lower = mid+1;
        }else{
            higher = mid-1;
        }
    }
    return -1;
}

//console.log(binarySearch(arr, 93));


function recBinSrc(arr, target,low=0, high=arr.length-1) {

    if(low>high) return -1;

    let mid = Math.floor((low+high)/2);

    if(arr[mid] === target) return mid;

    if(arr[mid] < target) return recBinSrc(arr, target, mid+1, high);
    else return recBinSrc(arr, target, low, mid-1);
}

//console.log(recBinSrc(arr, 33));


function firstOccurance(arr, target) {
    let found = -1;
    let low = 0, high = arr.length-1;

    while(low <= high) {
        let mid = Math.floor( (low + high) / 2);
        
        if(arr[mid] === target) {
            found = mid;
            high = mid-1;
        }else if(arr[mid] <= target) {
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return found;
}
console.log(firstOccurance(arr, 21));

function lastOccurance(arr, target) {
    let found = -1;
    let low = 0, high = arr.length-1;
    while(low <= high) {
        let mid = Math.floor( (low + high) / 2);

        if(arr[mid] === target) {
            found = mid;
            low = mid+1;
        }else if(arr[mid] < target) {
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return found;
}
console.log(lastOccurance(arr, 21));
