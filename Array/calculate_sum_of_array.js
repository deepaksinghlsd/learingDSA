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

// Example usage:
try {
    const arr = [1, 2, 3, 4, 5];
    const result = sum_of_array(arr);
    console.log("Sum of array:", result); // Output: Sum of array: 15
} catch (error) {
    console.error("Error:", error.message);
}