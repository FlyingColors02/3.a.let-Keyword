//VARIABLE
// keywords: let, var, and const

//1.let keyword (ES6)

let intValue= 10;
console.log(intValue); //10



console.log(intValue); //throws exception(cannot access 'intValue' before initialization)
let intValue= 10;
console.log(intValue); 

//note:In ES6 interpreter can read code of line ahead of the current line.
//therefore; we get error "cannot access before initialization" instead of undefined