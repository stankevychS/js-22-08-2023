//ВИДИ ФУНКЦІЙ

//FUNCTION DECLARATION
hello(); //виведеться
function hello () { 
    console.log("hello");
}
hello();

//FUNCTION EXPRESSION
hello2(); //не виведеться
let hello2 = function () { 
    console.log("hello");
}
hello2();