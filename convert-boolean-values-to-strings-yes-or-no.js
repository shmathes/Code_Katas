/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool) 
{
    //Check if bool is true, then return Yes. Else, return No.
    if(bool){
        return "Yes"
    }else{
        return "No"
    }
}

function boolToWord(bool){
    return bool ? "Yes" : "No";
}

console.log(boolToWord(true), "Yes");
console.log(boolToWord(false), "No");