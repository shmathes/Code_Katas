function findUniq(arr)
{
    const values = arr.reduce((acc, curr) => {
        if(acc[curr]){
            acc[curr] += 1;
        }else{
            acc[curr] = 1;
        }
        return acc;
    }, {});
    const returnValue = +Object.keys(values).find(val => values[val] === Math.min(...Object.values(values)));
    return returnValue;
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55)
console.log(findUniq([ 1, 0, 0 ]), 1);
    console.log(findUniq([ 0, 1, 0 ]), 1);
    console.log(findUniq([ 0, 0, 1 ]), 1);
    console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
    console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);