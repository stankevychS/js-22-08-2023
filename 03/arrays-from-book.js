var array1 = ["яблуко","груша","апельсин","банан"];
console.log(array1); 
//array1[0] - яблуко
//масив[число] - індекс
console.log(array1[2]); //апельсин - індекс 2
array1[0] = "вже не яблуко";
console.log(array1); 

var array2 = []; //порожній масив
array2[0] = "ручка";
array2[1] = "олівець";
array2[5] = "зошит";
console.log(array2); //ручка олівець x3 undefined зошит
console.log(array2[2]); //undefined

var array3 = [3, "стіл", ["дуб", "сосна", 5]]; //масив в масиві
console.log(array3);
console.log(array3[2]); //["дуб", "сосна", 5]
console.log(array3[2][1]); //сосна

//МЕТОДИ\ФУНКЦІЇ

//довжина масиву - .length
var array4 = ["один", "два", "три", ["чотири", "п'ять"]];
console.log(array4.length); //4
console.log(array4[3].length); //2
console.log(array4[array4.length-1]); //останній елемент масиву

//додавання елементів в КІНЕЦЬ масиву - .push(елемент) - за раз скільки завгодно
var array5 = [];
array5.push("собака");
array5.push("кішка");
array5.push("кіт");
array5.push(3);
console.log(array5);

//видалення ОСТАННЬОГО елемента масиву - .pop()
var array6 = ["один", "два", "три", "чотири", "п`ять"];
array6.pop();
console.log(array6); //["один", "два", "три", "чотири"]
var lastDeletedElement = array6.pop(); //чотири
console.log(array6, lastDeletedElement); //[ 'один', 'два', 'три' ] чотири

//додавання елементів в ПОЧАТОК масиву - .unshift(елемент) - за раз скільки завгодно
array5.unshift("перед собакою");
array5.unshift(["ще раніже ніж","минуле повідомлення"]);
console.log(array5);

//видалення елементів з ПОЧАТКУ масиву - .shift(елемент)
var array7 = ["один", "два", "три", "чотири", "п`ять"];
array7.shift();
console.log(array7); //[ 'два', 'три', 'чотири', 'п`ять' ]
var firstDeletedElement = array7.shift(); //два
console.log(array7, firstDeletedElement); //[ 'три', 'чотири', 'п`ять' ] два

//об'єднання масивів - масив_який_йде_першим.concat(наступний_масив)
var firstArray = ["один","два","три"];
var secondArray = ["чотири","п'ять"];
var thirdArray = ["шість","сім", "вісім"];
var allArray = firstArray.concat(secondArray, thirdArray);
console.log(allArray); //[ 'один', 'два', 'три', 'чотири', "п'ять", 'шість', 'сім', 'вісім' ]
console.log(firstArray); //досі виводиться

//пошук елмента за індексом - .indexOf("елемент")
var array8 = ["червоний","оранжевий","жовтий","синій", 5, ["раз", "два"], "жовтий"];
console.log(array8.indexOf("цього елементу немає в масиві")); // -1
console.log(array8.indexOf("синій"),array8.indexOf(5),array8[5].indexOf("раз")); //3, 4, 0
console.log(array8.indexOf("жовтий")); //2, жовтий в масиві двічі. але повертає перше значення

//масив в рядок(str) - .join("розділювач, по дефолту кома")
var array9 = ["один","два","три"];
console.log(array9.join()); //один,два,три
console.log(array9.join("-w-"));//один-w-два-w-три
console.log(array9.join(" і "));//один і два і три
var array10 = [1,2,3];
console.log(array10.join(" "));//1 2 3, числа стали рядком

//рандомний елемент з масиву
var randomArray = ["перший рандом","другий рандом","третій рандом"];
var randomElement = randomArray[Math.floor(Math.random() * randomArray.length)]; //рандомне ціле число в 0 до 2 стане індексом рандомного елементу
//Math.floor() - округлення, інший шлях - parseInt()
console.log(randomElement);