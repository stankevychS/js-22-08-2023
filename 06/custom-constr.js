//функція конструктор -> частіше class
function Worker (wName,wSurname, wJob) { //конструктор з ВЕЛИКОЇ букви
    //new ==> this ==> this
    this.name = wName;
    this.surname = wSurname;
    this.job = wJob;
}
const w1 = new Worker("Ольга","Петрова","Вчитель");
//екземпляр класу Worker
//батько не Object,а Worker
console.log(w1);


function Point (x,y) {
    this.x=x;
    this.y=y;
}
const leftTop = new Point(0,0);
const rightBottom = Point(200,200);//без new = undefined
//new - ключове слово
const p1 = new Point(0,0);
const p2 = new Point(0,0);
console.log(p1==p2); //false
console.log(p1.x==p2.x); //true
p1.x = 300;

//статичні властивості - не наслідуються екземплярами
Point.justNum = 1;

//статичний метод - не наслідуються екземплярами
Point.getOrigin = function () {
    return new Point(100,100);
}
let p3 = new Point(20,20);
//console.log(p3.getOrigin()); //помилка

//ЗАПИСУВАТИ МЕТОДИ ПРЯМО В NEW КОНСТРУКТОР - ПОГАНО І НЕПОТРІБНО
