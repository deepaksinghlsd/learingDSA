function factorial_of_n_numbers(n) { 
    if(n <=1) {
        return 1 ; 
    }

    return n * factorial_of_n_numbers(n - 1);
}
console.log(factorial_of_n_numbers(5)); // Output: 120