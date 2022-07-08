/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers)
{
    const evens = integers.filter((num) => {return num % 2 == 0});
    const odds = integers.filter((num) => { return (num % 2 == 1 || num % 2 == -1)});

    return evens.length < odds.length ? evens[0] : odds[0];
}

function findOutlier(integers){
    const evens = integers.filter(num => num % 2 === 0);
    const odds = integers.filter(num => num % 2 !== 0);

    return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)
console.log(findOutlier([-93471770,-105824088,53691548,-105219368,46027278,135577312,35704500,-48842508,-178923858,49316022,-127884644,-6576112,192948166,-129460510,87779164,-86295522,108980340,53945180,-154124298,-105637182,52730156,-94165904,-128334504,158694222,95527746,170679564,142952094,-138699386,-51947016,-18705594,150979010,94347618,23484360,-178854102,42366030,-182520080,177693820,76964960,-152237400,108343954,29576490,-4307708,-174168456,188287866,-63196493,-174634806,-11010016,-8911660,71208588], -63196493));