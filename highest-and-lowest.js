/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
*/

function highAndLow(numbers)
{
    if(numbers.length === 1)
    {
        return numbers;
    } 
    //split the numbers string to create an array
    //sort the array in ascending order
    const nums = numbers.split(' ').sort((a, b) => a - b);
    //return the last element of the array and the first element
    return `${nums[nums.length -1]} ${nums[0]}`
}

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
console.log(highAndLow("1 2 3"), "3 1");
console.log(highAndLow("42"), "42");