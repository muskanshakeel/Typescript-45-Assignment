// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more test.
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

console.log("testing equality with string");
let str1 = "juice";
let str2 = "Juice";

console.log(str1 == "juice");
console.log(str2 == "Juice")
console.log(str1 == str2);

console.log("tesing with lowecase");
console.log("Juice".toLowerCase()=="juice");

console.log("testing with Numerical");
console.log(8>15);
console.log(4<7);

console.log("testing with && and or operator")
console.log(true && false);
console.log(true|| false);

console.log("testing whether an item is in a array");
let vegetables=["cucumber","tomato","potato"];
console.log("is potato is vegetable?");
console.log(vegetables.includes("potato"));

console.log("Testing whether an item is not in a array");
console.log("is capsicum is vegetable?");
console.log(!vegetables.includes("capsicum"));