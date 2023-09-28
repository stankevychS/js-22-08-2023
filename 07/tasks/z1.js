//ES5 - старий синтаксис
const userInfo = {
    name: 'Ivan',
    surname: "Ivanov"
}


function CreateNewUser (name,surname) {
    this.firstName = name;
    this.lastName = surname;
}
CreateNewUser.prototype.getLogin = function () {
    return this.firstName.charAt(0).toLowerCase() + this.lastName; //перша буква імені з маленької + прізвище
}
const newUser = new CreateNewUser(userInfo.name, userInfo.surname)
console.log(newUser.getLogin());


//ES6 - новий синтаксис
//класи
class CreateNewUser2 {
    constructor(name,surname) {
        this.firstName = name;
        this.lastName = surname;
    }
    getLogin2 () {
        return this.firstName.charAt(0).toLowerCase() + this.lastName;
        //return (this.firstName.charAt(0) + this.lastName).toLowerCase()
        //return (this.firstName.charAt(0) + this.lastName).toLowerCase()
        //return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.split(".")[2]
    }
}
const newUser2 = new CreateNewUser2(userInfo.name, userInfo.surname)
console.log(newUser2.getLogin2());
