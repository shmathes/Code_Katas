function factorial(n) {
    let ret = 1;
    if(n === 0 || n === 1){
        return ret;
    }

    for(let i = n; i > 1; i--)
    {
        ret *= i
    }

    return ret;
}


console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);