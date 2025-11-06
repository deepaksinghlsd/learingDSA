function max_number_in_array (arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array") ;
    }
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let max = arr[0];
    for (let i = 0 ; i< arr.length; i++) {
        if(typeof arr[i] !== 'number') {
            throw new Error("All elements in the array must be numbers");
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// using reduce method
function max_number_in_array_reduce(arr) {  
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return arr.reduce((max, currentValue) => {
        if (typeof currentValue !== 'number') {
            throw new Error("All elements in the array must be numbers");
        }
        return currentValue > max ? currentValue : max;
    }, arr[0]);
}

// Example usage:

// try {
//     const arr = [1, 2, 3, 4, 5];
//     // const result = max_number_in_array(arr);
//     const result = max_number_in_array_reduce(arr);
//     console.log("Maximum number in array:", result); // Output: Maximum number in array: 5
// } catch (error) {
//     console.error("Error:", error.message);
// }

// Finding second maximum number in array
function second_max_number_in_array(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error("All elements in the array must be numbers");
        }
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    
    if (secondMax === -Infinity) {
        throw new Error("No second maximum found, all elements might be equal");
    }
    
    return secondMax;
}
// Example usage for second maximum:
try {
    const arr2 = [ 4, 4, 4];
    const secondMaxResult = second_max_number_in_array(arr2);
    console.log("Second maximum number in array:", secondMaxResult); // Output: Second maximum number in array: 4
} catch (error) {
    console.error("Error:", error.message);
}