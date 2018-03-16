// //isEven

// // ----1A---- explictly returning true/false
// function isEven(num) {
// // return true if even
// if(num % 2 === 0) {
//     return true;
// }
// // return false otherwise
// else {
//     return false
//     }
// }

// ----1B---- the arguement is boolean thus the function inherently returns true/false

function isEven(num) {
    return num % 2 === 0;
}

// ----2---- factorial --> factorial(4) = 4 X 3 X 2 X 1

function factorial(num){
// define a result variable
    var result = 1;
// calculate factorial and store value in results
    for(var i = 2; i <= num; i++){
        result = result * i;
}
// return a result variable
    return result;
}

// ----3----4 kebabTOsnake

function kebabToSnake(str) {
// replace all "-" with "_"
    var newStr = str.replace(/-/g , "_");
// return str
    return newStr;
}