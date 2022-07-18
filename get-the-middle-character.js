function getMiddle(s)
{
    const half = s.length / 2;
    return s.length % 2 === 0 ? s.substring(half -1, half + 1) : s.substring(half, half + 1);
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");