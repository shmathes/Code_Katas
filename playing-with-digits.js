/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive 
powers of p is equal to k * n
*/

function digPow(n, p)
{
    let nums = n.toString().split('');
    let iterator = p;
    let sum = 0;

    nums.forEach((val) => {
        sum += Math.pow(parseInt(val), iterator);
        iterator++;
    });

    return Math.floor(sum / n) > 0 ? Math.floor(sum / n) : -1;
}

function digPow(n, p)
{
    let iterator = p;
    let sum = 0;

    n.toString()
      .split('')
      .forEach((val) => {
        sum += Math.pow(parseInt(val), iterator);
        iterator++;
      });

    return Math.floor(sum / n) > 0 ? Math.floor(sum / n) : -1;
}

function digPow(n, p)
{
    const sum = n.toString()
      .split('')
      .reduce((acc, curr) => {
        acc += Math.pow(curr, p);
        p+=1;
        return acc;
      }, 0);

    return (Math.floor(sum / n) * n) === sum ? Math.floor(sum / n) : -1;
}

console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)