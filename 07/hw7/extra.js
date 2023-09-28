/*
Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. 
Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". 
А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
*/
class Driver {
    constructor (pib = "Прізвище Ім'я По батькові", experience = 5) {
        this.pib = pib;
        this.experience = `${experience} років`;
    }
}
class Engine {
    constructor (power = 100, company = "Car Inc") {
        this.power = `${power} кінських сил`;
        this.company = company;
    }
}
class Car {
    constructor (carModel, carClass, carWeight, driver = new Driver (), engine = new Engine ()) {
        this.model = carModel;
        this.class = carClass;
        this.weight = `${carWeight} кг`;
        // this.driver = new Driver(pib, experience);
        // this.engine = new Engine(power, company);
        this.driver = driver;
        this.engine = engine;
    }
    start() {
        return `Поїхали`;
    } 
    stop() {
        return `Зупиняємося`;
    } 
    turnRight() {
        return `Поворот праворуч`;
    } 
    turnLeft() {
        return `Поворот ліворуч`;
    }
    toString() {
        return `
                Інформація про автомобіль
                __________________
                Марка автомобіля: ${this.model}
                Клас автомобіля: ${this.class}
                Вага автомобіля: ${this.weight}
                Інформація про водія
                __________________
                ПІБ водія: ${this.driver.pib}
                Стаж: ${this.driver.experience}
                Інформація про двигун
                __________________
                Потужність двигуна: ${this.engine.power}
                Виробник: ${this.engine.company}`;
    }
}
class Lorry extends Car{
    constructor (carModel, carClass, carWeight, driver, engine, carrying) {
        super(carModel, carClass, carWeight, driver, engine);
        this.carrying = `${carrying} тонн`;
    }
    toString() {
        return `
                Інформація про вантажівку
                __________________
                Марка вантажівки: ${this.model}
                Клас вантажівки: ${this.class}
                Вага вантажівки: ${this.weight}
                Вантажопідйомність кузова: ${this.carrying}
                Інформація про водія вантажівки
                __________________
                ПІБ водія: ${this.driver.pib}
                Стаж: ${this.driver.experience}
                Інформація про двигун
                __________________
                Потужність двигуна: ${this.engine.power}
                Виробник: ${this.engine.company}`;
    }
}
class SportCar extends Car{
    constructor (carModel, carClass, carWeight, driver, engine, speed) {
        super(carModel, carClass, carWeight, driver, engine);
        this.speed = `${speed} км/год`;
    }
    toString() {
        return `
                Інформація про спорткар
                __________________
                Марка спорткару: ${this.model}
                Клас спорткару: ${this.class}
                Вага спорткару: ${this.weight}
                Гранична швидкість: ${this.speed}
                Інформація про водія спорткару
                __________________
                ПІБ водія: ${this.driver.pib}
                Стаж: ${this.driver.experience}
                Інформація про двигун
                __________________
                Потужність двигуна: ${this.engine.power}
                Виробник: ${this.engine.company}`;
    }
}



const car = new Car ("Toyota", "Camry", 1600, new Driver("Андрій Андрій Андрійович", 35), new Engine(207, "Toyota Motor Corporation"));
console.log(car.toString());