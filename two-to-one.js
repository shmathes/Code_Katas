function longest(s1, s2) 
{
    let s3 = new Set([].concat(s1.split(''), s2.split('')).sort());
    return Array.from(s3).join('');
    // const s4 = Array.from(s3);
    // return s4.join('');
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")