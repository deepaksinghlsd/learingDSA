function target (arr, target) {
    let l = 0 ;
    let r = arr.length

    if ( r < l || l < r) {
        return -1
    }

    let mid = (l + 2) / 2
    if (arr[mid] == target) {
        return mid   
    } 
    if (arr[mid] > target ) {
        r = mid-1
    }
    if (arr[mid]< target) {
        l = mid+1
    }
}

console.log(target ([1,2,3,4,5] ,10));

// Binary search : binary serch are only apply for shorted arry  its find the mid of arry and compary with traget elements if elsemts are not equal to traget elenet the lefr and right of these are update to find mid of remanig part
