function sum_of_elemats_in_array (arr) {
    let size_of_arr = arr.length;  
    if(size_of_arr == 0 ) {
        return 0;
    }
    const newArr = arr.pop(); // its return the last element of array
    return newArr + sum_of_elemats_in_array(arr);
}

console.log(sum_of_elemats_in_array([1,2,3,4,5])); // Output: 15