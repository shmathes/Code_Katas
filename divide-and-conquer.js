function divCon(x)
{
    let sum = 0;
    for(num of x){
        sum = typeof num == 'string' ? sum - parseInt(num) : sum + num
    }
    return sum;
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 