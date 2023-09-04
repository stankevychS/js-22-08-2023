function one() {
    console.log("тіло функції");
}
let firstFunction = function () {
    console.log("функція");
}
firstFunction(); //виводить тіло функції і повертає undefined

let sayHello = function (name) { //name-аргумент
    console.log(`Привіт, ${name}!`);
}
sayHello("Софія");

let catsDraw = function (count) {
    for(let i=1; i<=count; i++){
        console.log(`${i}. =^.^=`)
    }
}
catsDraw(5);

let draw = function (count, whatToDraw) {
    for(let i=1; i<=count; i++){
        console.log(`${i}. ${whatToDraw}`)
    }
}
draw(4, ":)");

//повернення результату
let double = function (number) {
    return number*2; //може повернути лише одне значення
}
let double_number = double(3);
console.log(double_number+double(2)); //10

let randomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}
wordsArray = ["дерево","квітка","парта","зелений","ручка","голова","виноград","собака","веселка"];
let randomW = randomWord(wordsArray);
console.log(randomW);

//оператор return = вихід з функції
let fifthLetters = function (name) {
    if (name.length<5) {
        return console.log("Немає 5-ти букв"); //вийти з функції
    }
    return console.log(`П'ята буква Вашого імені: ${name[4]}`)
}
fifthLetters("Юля");
fifthLetters("Володимир");

//можна не використовувати elfe if, else, оскільки після кожного if іде вихід з фінкції
let yourNumber = function (number) {
    if(number<5){
        return "Ваше число менше 5";
    }
    if(number<10){
        return "Ваше число більше-дорівнює 5 і менше 10";
    }
    return "Ваше число більше-дорівнює 10";
}
console.log(yourNumber(2));
console.log(yourNumber(5));
console.log(yourNumber(11));


//короткий і довгий запис функції
function short(number) {
    return number+1;
}
let long = function (number) {
    return number+1;
}