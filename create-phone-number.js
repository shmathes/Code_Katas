/*
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.
*/

function createPhoneNumber(numbers)
{
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

function createPhoneNumber(numbers)
{
    let phoneNumber = '(';
    for(let i = 0; i < numbers.length; i++)
    {
        if(i === 2)
        {
            phoneNumber += `${numbers[i]}) `;
        }
        else if(i === 5)
        {
            phoneNumber += `${numbers[i]}-`;
        }else{
            phoneNumber += numbers[i]
        }
        
    }
    return phoneNumber;
}

function createPhoneNumber(numbers)
{
    let format = '(xxx) xxx-xxxx';

    for(let i = 0; i < numbers.length; i++){
        format = format.replace('x', numbers[i]);
    }

    return format;
}

function createPhoneNumber(numbers){
    return numbers.reduce((prev, curr) =>
        prev.replace('x', curr)
        , '(xxx) xxx-xxxx');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");