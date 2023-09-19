let speak = function () {
    console.log("Привіт, я собака",this.name);
};
let dog = {
    name: "Рекс",
    age: 7,
    bark: function () {
        console.log("гав-гав, мене звати",this.name);
    },
    speak: speak
};

dog.bark();
dog.speak();


//конструктор
let Animal = function (a,b) {
    this.name = a;
    this.color = b;
};
let giraffe = new Animal('жираф', 'жовтий'); //Car - назва контруктора, 100-200 - аргументи
console.log(giraffe);

//прототип

Animal.prototype.newAnimal = function () { //Animal - контруктор, newAnimal - метод

};
