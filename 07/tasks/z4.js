const dateArray = () => {
    const currentDate = new Date ();
    return [currentDate.getDate(), currentDate.getMonth()+1, currentDate.getFullYear()];
}
dateArray();

function callbackFunc (name, surname) {
    return `Добрий день, ${name} ${surname}!`;
}
function func (callback) {
    console.log(`${callback} Написано на js.`);
}
//func(callbackFunc("Софія", "Станкевич"));

class forTovar {
    constructor(price, date, name, descr) {
        this.price = price;
        this.date = date;
        this.name = name;
        this.descr = descr;
    }
    showInfo() {
        console.log(`Ціна товару: ${this.price} грн. Опис товару: ${this.descr}`);
        return `Товар - ${this.name}`;
    }
}
const tovar1 = new forTovar(20, "15.09", "Яблуко", "Яблуко Українське відрізняється високою якістю, привабливим зовнішнім виглядом та чудовим смаком.");


const obj = {
    name: "object1",
    number: 1,
    color: "green"
}
for (let keys in obj){
    console.log(keys);
}