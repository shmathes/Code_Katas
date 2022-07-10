function high(x) 
{
    //create object to store words in
    let wordPoints = {};
    //create a list of letters
    const alpha = Array.from(Array(26)).map((e, i) => i + 97).map((x) => String.fromCharCode(x));
    //split the words into a list
    const words = x.split(' ');
    //iterate through each letter of each word
    for(let i = 0; i < words.length; i++)
    {
        const letters = words[i].split('');
        wordPoints[words[i]] = 0;
        for(let j = 0; j < letters.length; j++)
        {
            //calculate score based on list index
            wordPoints[words[i]] += alpha.indexOf(letters[j]) + 1;
        }
    }
    return Object.keys(wordPoints).find((val) => wordPoints[val] === Math.max(...Object.values(wordPoints)));
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');