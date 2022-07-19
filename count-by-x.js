function countBy(x, n) {
    let z = [];
    let num = 1;
    while(z.length < n)
    {
        z.push(x * num);
        num += 1;
    }
    return z;
}

console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
console.log(countBy(2,5), [2,4,6,8,10], "Array does not match")