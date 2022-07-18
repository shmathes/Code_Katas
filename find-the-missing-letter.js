function findMissingLetter(array)
{
    let prev = 0;
    for(letter of array)
    {
        if(prev > 0 && (letter.charCodeAt(0) - prev === 2))
        {
            return String.fromCharCode(prev + 1);
        }else{
            prev = letter.charCodeAt(0);
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');