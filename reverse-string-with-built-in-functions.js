// challenge: reverse the provided string using built-in functions

function revString(str){
    // create a newStr variable
    var newStr;
    // set newStr to str split, then reversed, then joined together
    var newStr = str.split('').reverse().join('');
    // return newStr
    return newStr;
      
    }
    
    console.log(revString('car'));
    console.log(revString('bar'));