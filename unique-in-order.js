var uniqueInOrder=function(iterable)
{
    let out = []
    let prev = '';
    for(value of iterable)
    {
        if(value !== prev)
        {
            out.push(value);
        }
        prev = value;
    }
    return out;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']);
console.log(uniqueInOrder([1,2,2,3,3]), [1, 2, 3]);