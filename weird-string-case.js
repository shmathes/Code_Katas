/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
*/

function toWeirdCase(string)
{
    let newString = '';
    for(let i = 0; i < string.length; i++)
    {
        newString += i % 2 === 0 ? string[i].toUpperCase() : string[i].toLowerCase();
    }
    return newString;
}

function toWeirdCase(string)
{
    string = string.split(' ');
    for(let i = 0; i < string.length; i++)
    {
        let word = string[i].split('');
        for(let j = 0; j < word.length; j++)
        {
            word[j] = j % 2 === 0 ? word[j].toUpperCase() : word[j].toLowerCase();
        }
        word = word.join('');
        string[i] = word;
    }
    return string.join(' ');
}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');