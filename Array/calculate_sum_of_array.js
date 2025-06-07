function sum_of_array (arr) {
    if (!Array.isArray (arr)) {
        throw new Error ("Input sust be array");
    }
     const length = arr.length; 
     let  sum = 0; 
     for (let i =0 ; i<length; i++){
        if(typeof arr[i] !== 'number') {
            throw new Error("All elements in the array must be numbers");
        }
        sum += arr[i];
     }
    return sum;
}

// using reduce method
function Sum_of_array_reducemethod  (arr) {
    if (!Array.isArray (arr)){
        throw new Error ("Input must be string"); 
    }
    return arr.reduce ((sum , cureentvalue)=> {
        if (typeof cureentvalue !== 'number'){
            throw new Error("All elements in the array must be numbers");
        }
        return sum + cureentvalue;
    }
, 0)
}

// using recursion 
function sum_of_array_recursion (arr, index= 0 ) {
    if (!Array.isArray(arr)){
        throw new Error("Input must be an array");
    }
    if (index >= arr.length) {
        return 0;
    }

    if (typeof arr[index] !== 'number') {
        throw new Error("All elements in the array must be numbers");
    }
    return arr[index] + sum_of_array_recursion(arr, index + 1);
   
}


// Example usage:
try {
    const arr = [1, 2, 3, 4, 5];
    const result = sum_of_array(arr);
    const reducremethod = Sum_of_array_reducemethod(arr);
    console.log("sum of array using reduce method:", reducremethod); // Output: sum of array using reduce method: 15
    const recursiveResult = sum_of_array_recursion([1, 2, 3, 4, 5]);
    console.log("Sum of array using recursion:", recursiveResult); // Output: Sum of array using recursion: 15
    console.log("Sum of array:", result); // Output: Sum of array: 15
} catch (error) {
    console.error("Error:", error.message);
}

