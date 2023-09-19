//КОНТРУКТОРИ
//.toString - стандратне представлення на сторінці

//Object
function Object () {
    return {};
}
const user = new Object();
user.name = "Ivan";
user.age = 18;
console.log(user);
//document.write(user); //{object Object}

Object.prototype.toString = function () {
    let info = "";
    for (let i in this){
        info+=i;
    }
    return info;
}
//document.write(user); //nameage

//Date
let myDate = new Date();
console.log(myDate);

//Array
let array1 = new Array(1,2,3);
console.log(array1);

//String
let str1 = new String("new str 1"); //тип object
let str2 = "str 1"; //тип string

str1.search('w'); //2, під другим індексом
console.log(str1.substr(2,4)); //w st, від 2 по 4 індекс

str1.color = "yellow";
str2.color = "green";
console.log(str1.color); 
console.log(str2.color); //undefined, бо строка


