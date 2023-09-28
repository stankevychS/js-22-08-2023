let str = "це строка тестування прикладу";

const subSTR = str.split(" ");
const subSTR_letters = str.split("");
console.log(subSTR); //масив кожного слова
console.log(subSTR_letters); //масив кожної букви

//charAt()
const strCharAt = str.charAt(2); //елемент з 2 індексом
//ідентично до str[2]

//TRIM()
str.trim(); //обрізати до якоїсь к-сті симовлів

//INCLUDES()
console.log(str.includes("це")); //true

//indexOf()
str.indexOf('ц'); //0

//lastIndexOf()
str.lastIndexOf('а');

//toLowerCase()
//toUpperCase()

//substring()
str.substring(2,5); //з 5 індекса до 5 невключно