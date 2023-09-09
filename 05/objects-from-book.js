//зберігає атрибути\відповідності\властивості\пари ключ-значення
//схоже на масив
//ключі об'єкта не відсортовані по порядку 

let dog = {//літерал об'єкта (властивість)
    "legs": 4,
    eyes: 2, //можна без лапок
    "dog name": "Рекс"
};
console.log(dog);

//{} літерал об'єкта
//[] літерал масиву
//'', "",`` літерал рядка(строки)
//true,false булевий літерал

console.log(dog["legs"], dog.legs); // 4 4
dog.eyes; //крапкова нотація


Object.keys(dog); //всі ключі об'єкта dog
console.log(Object.keys(dog)); //[ 'legs', 'eyes', 'dog name' ] - масив

let newObject = {};
newObject["firstKey"] = "abc";
newObject.secondKey = 123;
console.log(newObject); //{ firstKey: 'abc', secondKey: 123 }
newObject.thirdKey; //undefined

//масив об'єктів
let fruits = [
    {name: "яблуко", color: "red", number: 1},
    {name: "груша", color: "yellow", number: 1},
    {}
];

console.log(fruits[0]); //{ name: 'яблуко', color: 'red', number: 1 }
console.log(fruits[0]["name"], fruits[0].name); //яблуко яблуко

fruits[2].name = "банан";
fruits[2].color = "yellow";
console.log(fruits[2]); //{ name: 'банан', color: 'yellow' }

//масив об'єктів 2

let firstObj = {name: "first", num: [1,2,3]};
let secondObj = {name: "second", num: [4,5,6]};
let thirdObj = {name: "third", num: [7,8,9]};

let array = [firstObj, secondObj, thirdObj];
console.log(array[1].num[1]); //5

array[2].num[2] += 2; //9 --> 11 змінили число

let vegs = {
    Помідор: {
        color: "red",
        num: 1
    }, 
    "Велика картопля": {
        color: "brown",
        num: 2
    }, 
    Огірок:{
        color: "green",
        num: 3
    }
};
let tomato = vegs.Помідор; //{ color: 'red', num: 1 }
let potato = vegs["Велика картопля"]; //{ color: 'brown', num: 2 }
console.log(tomato, potato); // два об'єкти

//додати новий овоч
let carrot = {
    color: "orange",
    num: 4
}
vegs["Морква"] = carrot;
console.log(vegs["Морква"]); //{ color: 'orange', num: 4 }

console.log(Object.keys(vegs)); // [ 'Помідор', 'Велика картопля', 'Огірок', 'Морква' ]