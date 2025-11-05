function poer_of_n_number(base, exponent) {
    if(exponent == 0) {
        return 1;
    }
    return base * poer_of_n_number(base, exponent - 1);
}
console.log(poer_of_n_number(2, 3)); // Output: 8
console.log(poer_of_n_number(5, 4)); // Output: 625