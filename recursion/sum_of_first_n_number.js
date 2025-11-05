function sum_of_first_n_number(n) {
    if(n<=0) {
        return 0;
    }

   return n + sum_of_first_n_number(n - 1);
}

console.log(sum_of_first_n_number(5)); // Output: 15
console.log(sum_of_first_n_number(10));