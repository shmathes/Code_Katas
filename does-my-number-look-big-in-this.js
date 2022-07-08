/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
*/

function narcissistic(value) 
{
    let values = value.toString().split('');
    let sum = 0;
    for(let v of values)
    {
        sum += Math.pow(parseInt(v), values.length);
    }

    return value === sum;

}

function narcissistic(value) 
{
    let sum = 0;
    const values = value.toString().split('').forEach(val => sum += Math.pow(+val, value.toString().length));

    return value === sum;
}

function narcissistic(value) 
{
    const values = value.toString().split('');
    let sum = 0;
    values.forEach(val => sum += Math.pow(+val, values.length));

    return value === sum;
}

console.log(narcissistic(371), true);
console.log(narcissistic(7), true);