function Human (name="Ім'я",surname='Прізвище',age=18,color="синій") {
    this.name = name;
    this.sname = surname;
    this.age = age;
    this.favColor = color;
}
Human.planet = "Планета Земля"; //статична властивість
Human.info = function () { //статичній метод
    return `Люди́на — жива, наділена інтелектом істота, суб'єкт суспільно-історичної діяльності і культури. Місце життя - ${Human.planet}`;
}
Human.prototype.thisInfo = function () {
    return `Привіт, мене звати ${this.name} ${this.sname}! Мені ${this.age} років. Мій улюблений колір - ${this.favColor}.`
}

console.log(Human.info());

const firstHuman = new Human();
console.log(firstHuman.thisInfo()); //по дефолту

const secondHuman = new Human("Ivan", "Ivanov", 20, "жовтий");
console.log(secondHuman.thisInfo());

/*
secondHuman.planet; //undefined, оскільки екземпляри не наслідують статичні властивості 
secondHuman.info(); //помилка, оскільки екземпляри не наслідують статичні функції 

*/