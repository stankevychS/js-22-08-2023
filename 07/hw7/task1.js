/*
//1 
Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.
*/
class Animal {
    constructor (food, location) {
        this.food = food;
        this.location = location;
    }
    makeNoise () {
        return `Ця тварина видає дуже голосні звуки!`;
    }
    eat() {
        return `Ця тварина їсть їжу.`
    }
    sleep() {
        return `Ця тварина спить.`
    }
}
class Dog extends Animal {
    constructor (food, location, noise, name, breed) {
        super(food, location);
        this.noise = noise;
        this.animal = "Собака";
        this.name = name;
        this.breed = breed;
    }
    makeNoise () {
        return `${this.animal} голосно каже ${this.noise}.`;
    }
    eat() {
        return `${this.animal} їсть ${this.food}.`
    }
}
class Cat extends Animal {
    constructor (food, location, noise, name, color) {
        super(food, location);
        this.noise = noise;
        this.animal = "Кіт";
        this.name = name;
        this.color = color;
    }
    makeNoise () {
        return `${this.animal} голосно каже ${this.noise}.`;
    }
    eat() {
        return `${this.animal} їсть ${this.food}.`
    }
}
class Horse extends Animal {
    constructor (food, location, noise, name, weight) {
        super(food, location);
        this.noise = noise;
        this.animal = "Кінь";
        this.name = name;
        this.weight = `${weight} кг`;
    }
    makeNoise () {
        return `${this.animal} голосно каже ${this.noise}.`;
    }
    eat() {
        return `${this.animal} їсть ${this.food}.`
    }
}

/*
const dog1 = new Dog ("м'ясо", "будка", "гав-гав","Рекс","вівчарка");
const cat1 = new Cat ("сир", "в будинку хазяїна", "мяу-мяу","Сніжок","сірий");
const horse1 = new Horse ("сіно","хлів","іго-го","Каштан",600);
*/

class Vet {
    treatAnimal (animal) {
        console.log(`${animal.animal} на ім'я ${animal.name} прийшов на прийом. ${animal.name} обожнює їсти ${animal.food} і знаходиться у зазначеному місці: ${animal.location}.`);
    }
}
const mainVet = new Vet();

function main () {
    const animals = [new Dog ("м'ясо", "будка", "гав-гав","Рекс","вівчарка"), new Cat ("сир", "в будинку хазяїна", "мяу-мяу","Сніжок","сірий"), new Horse ("сіно","хлів","іго-го","Каштан",600)]
    animals.forEach (function (animal) {
        mainVet.treatAnimal(animal);
    });
    
    /*
    for (let i=0; i<animals.length; i++) {
        mainVet.treatAnimal(animals[i]);
    }
    */
}

main();