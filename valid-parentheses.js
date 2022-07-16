function validParentheses(parens) 
{
    let t = [];
    for(let i = 0; i < parens.length; i++)
    {
        if(parens[i] === '(')
        {
            t.push(parens[i]);
        }
        
        if(parens[i] === ')' && t.length === 0){
            return false;
        }else if(parens[i] === ')'){
            t.pop();
        }
    }
    return t.length > 0 ? false : true;
}

function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

console.log(validParentheses( "(" ), false)
console.log(validParentheses( ")" ), false)
console.log(validParentheses( "" ), true)
console.log(validParentheses( "()" ), true)
console.log(validParentheses( "())" ), false)
console.log(validParentheses("())("), false);