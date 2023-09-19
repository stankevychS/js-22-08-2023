const userInfo = {
    name: 'Ivan',
    surname: "Ivanov",
    birthday: "01.01.2001"
}
class CreateNewUser {
    constructor(name,surname,birthday) {
        this.firstName = name;
        this.lastName = surname;
        this.birthday = birthday;
    }
    getLogin () {
        return this.firstName.charAt(0).toLowerCase() + this.lastName;
    }
    getAge() {
        return new Date().getFullYear() - this.birthday.split(".")[2];
    }
    getPassword() {
        return this.firstName.charAt(0).toUpperCase()+this.lastName.toLowerCase()+this.birthday.split(".")[2];
    }
}
const newUser = new CreateNewUser(userInfo.name, userInfo.surname, userInfo.birthday)
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());