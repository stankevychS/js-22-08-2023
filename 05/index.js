const user = {
    name: "Ivan",
    age: 20
}
const obj = new Object(); //порожній об'єкт

for (let props in user){
    console.log(props); //name, age
    console.log(user[props]); //ivan, 20
}