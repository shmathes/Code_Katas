function makeNegative(num) {
    return num  > 0 ? num  * -1 : num;
}


console.log(makeNegative(42), -42);
console.log(makeNegative(0), 0);
console.log(makeNegative(1), -1);
console.log(makeNegative(0.12), -0.12);