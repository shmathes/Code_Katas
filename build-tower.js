function towerBuilder(nFloors) {
    let arr = [];
    let num = 1;
    let floors = nFloors;
    for(let i = 1; i <= nFloors; i++)
    {

        let spaces = (floors - 1) > 0 ? ' '.repeat(floors) : '';
        let star = '*'.repeat(num);
        let str = `${spaces}${star}${spaces}`
        arr.push(str);
        num += 2;
    }
    return arr;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);