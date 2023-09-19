//var -> let
const NAME = 255; //const - незмінне значення
{
    const NAME = [];
   {
        console.log(NAME); //виведеться
    }
}



//псевдо-масив arguments
function square () {
    //псевдо-масив arguments
    console.log(arguments); //всі аргументи, передані при виклику функції
    console.log(arguments[1]);
}
const arr = ["a","b","c","d","e","f","g","h","x","y"];
const arr1 = [];
for(let i=0; i<10;i++){
    const num = Math.floor(Math.random()*10);
    arr1[i] = arr[num];
}
square(arr1[0],arr1[1],arr1[2]); //рандомна кількість



//СТРІЛКОВІ ФУНКЦІЇ \ ARROW FUNCTIONS
//не працюють з контекстом(this) і псевдо-масив arguments
//const = (arg) => {}
const funcArrow = (arg1) => {
    console.log(arg1);
}
funcArrow("abc");

const funcArrow2 = arg1 => { //можна без дужок, якщо один аргумент
    console.log(arg1);
}
funcArrow2("abc");

const funcArrow3 = arg1 => console.log(arg1); //якщо коротка
funcArrow3("abc");


//.filter(function (item) {return item>0}) - фільтрування масиву
//якщо item>0, то він запишеться в новий масив



//метод в об'єкті
const object = {
    method: () => { //за домогою стрілковою функції
        console.log("this is method");
    },
    method3 () {
        console.log("second method");
    }
}



const print = (name = "Ви не ввели ім'я") => { //якщо аргумент не переданий
    console.log("Ваше ім'я "+name); //за замовчуванням
}
print();
print("Vasya");





//REST - ЗБІР ЕЛЕМЕНТІВ У МАСИВ ЧИ ОБ'ЄКТ
//rest-оператор
//замість псевдо-масиву arguments 
//(добре для стрілкових функцій, але працює у всіх функціях)
const f = (...arr) => { //...arr = масив всіх аргументів
    console.log(arr);
    console.log(arr[1]);
}
f(1,2,3);
f(1,2);
f(1,2,3,4,5);


//SPREAD - РОЗПАКОВКА МАСИВУ В ОКРЕМІ ЕЛЕМЕНТИ (протилежний до rest)
//spread-оператор
const array2_1 = [100,2,57,62];
const copy = [77,...array2_1,77]; //всі елементи
console.log(...array2_1); //100 2 57 62 -ОКРЕМІ ЕЛЕМЕНТИ

//замість цього:
const res = Math.max(array2_1[0], array2_1[1]); //і тд
//це:
const res2 = Math.max(...array2_1);




//деструктуризація (об'єкти, масиви)
//витягувати потрібні дані, інформацію
//розкласти елементи масива чи об'єкту по змінних
const user2 = {
    name: "Ivan",
    surname: "Ivanov",
    age: {
        one: 18,
        two: 19
    }
}

const {name,age} = user2; //витягуєм ім'я і вік
console.log(name);
console.log(age.one, age);

//витягуєм все за допомогою spread
const {...all} = user2; 
console.log(all);

const array3 = [1,2,3,4,5];
const [a,b,c, ...others] = array3;
console.log(a); //1
console.log(b); //2
console.log(others); //[ 4, 5 ]




//змінні і властивості об'єктів
const name_forUser = "Oleg";
const userOleg = {
    name_forUser, //додається автоматично те, що в змінні
    age: 18,
    say() {
        console.log("Привіт, я "+this.name_forUser);
    }
}
console.log(userOleg.name_forUser); //Oleg
userOleg.say(); //Привіт, я Oleg



//Object.assign() - копія об'єкту (старий спосіб)
//Object.assign({куди записати}, obj1,obj2 - звідки взяти інформацію)
const firstObj = {
    name: "one",
    age: 12
}
const secondtObj = {
    name2: "two",
    age: 13
}
const thirdObj = Object.assign({},firstObj,secondtObj);
console.log(thirdObj); 
//{ name: 'one', age: 13, name2: 'two'}
//age:13, оскільки запише останню власт з однаковими назвами



//новий спосіб копіювання, SPREAD
const newThirdObj = {...firstObj, ...secondtObj};