function sortArray(array) 
{
    let evenIndices = []
    array.filter((num, index) => {
        if(num % 2 === 0){
            evenIndices.push(index);
            return index;
        }
    });
    oddArray = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    for(let i = 0; i < evenIndices.length; i++){
        oddArray.splice(evenIndices[i], 0, array[evenIndices[i]]);
    }
    return oddArray;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);
console.log(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 2, 8, 5, 4, 11]);
console.log(sortArray([26, -16, 24, 4, -24, 47, -47, -10, -44, 9, 0,  9, -39,  48,  43]), [26, -16, 24, 4, -24, -47, -39, -10, -44, 9, 0, 9, 43, 48, 47])