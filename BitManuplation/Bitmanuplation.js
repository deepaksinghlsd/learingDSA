let a = 0 ; 
let b = 1 ; 
// bitwise or operater (|) -> For rembaring we just add these bits 
console.log(a | b)
// a | a = 1 ;
// a | b = 0 ;
// b | a = 1 ; 
// b | b = 1 ;

// Bitwise And operater (&) -> For Bitwise And operater just multiple (1 *1 = 1)

console.log(a & b )
console.log(a & a )
console.log(b & b )
console.log(b & a )

// a & a = 0 ;
// a & b = 0 ; 
// b & b = 1 ; 
// b & a = 0 ;

// Bitwise XOR operator (^) - (same same give me 1 )

console.log(a ^ b)
console.log(a ^ a)
console.log(b ^ b)
console.log(b ^ a)

// a ^ b = 0  
// a ^ a = 1
// b ^ a = 0 
// b ^ b = 1 

// bitwise Not (~) operator (it give me opsiter when we use these )

console.log(~b)

// To understand why ~11 becomes -12, we have to look at how computers handle negative numbers 
// using a system called Two's Complement.The computer does not actually "add one first." 
// The addition of 1 is just a mathematical shortcut to help humans calculate the result quickly. 
// The computer only flips the bits.Here is step-by-step what happens inside your computer's memory.
// Step 1: The Computer Flips the BitsJavaScript stores the number 11 as a 32-bit sequence. When you use ~, 
// the computer instantly flips every single 0 to 1 and 1 to 0.Decimal 11: 00000000 00000000 00000000 00001011After ~:   11111111 11111111 11111111 11110100

// Step 2: Reading the New Binary NumberBecause the very first bit on the left is now a 1, JavaScript recognizes 
// this as a negative number.To figure out which negative number this pattern represents, computers
//  use Two's Complement. To decode a Two's Complement negative binary number back into a human-readable decimal,
//   you must reverse the process:Invert all the bits back: 00000000 00000000 00000000 00001011 (which is 11)Add 
//   1 to the result: \(11 + 1 = 12\)Add the negative sign: -12Why does this happen?This happens because binary counting wraps around.
//    In a 32-bit system:0 flipped becomes -1 (1111...1111)1 flipped becomes -2 (1111...1110)2 flipped becomes -3 (1111...1101)


// Bitwise >> (Right shift  opraters) (lef side or right side keo ase yad rakh saket hai jidher cone banata ho wohi oerater hai )
//  formulta(a >> b = a/a ka power b)

let A = 101
console.log(101 << 2)