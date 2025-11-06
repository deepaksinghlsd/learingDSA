function target(arr , trg) {
    for ( let i = 0 ; i < arr.length ; i++){
        if(arr[i] == trg)
            return i
    }
    return -1
}
console.log(target([1,2,3,4,5,6,7], 10));

// linear search = its itracte hole arry if tagert are macth then it retrun it 