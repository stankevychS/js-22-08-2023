//prototype
//прототип для того, аби в кожен екземпляр не зберігалось кожного разу по, скажімо, 100 функцій
//конструктор АВТОМАТИЧНО наслідує свій прототип
//всі методи виносяться в прототипи для економлення місця(пам'яті)

//__proto__

//+ зменшення записів
//+ проект не займає багато місця

//prototype - об'єкт

//наслідуваність - завжди фінальний Object

function Rectangle (w,h) {
    this.width = w;
    this.height = h;
}
Rectangle.prototype.getArea = function () {
    return this.width*this.height;
}
const rect = new Rectangle(2,10);
console.log(rect.getArea()); //20

Rectangle.prototype.name = "rectangle";
console.log(rect.name);

rect.name = "not rectangle";
console.log(rect.name);


const user = {};
user.text = "hello";
user.age = 18;
console.dir(user); //виводить, щоб почитати про нього
console.log();
console.info();
console.error();
console.warn();

//об'єкти наслідують один одного
let data = Object.create(user);

//немає прототипу, наслідуваності
let data2 = Object.create(null); 