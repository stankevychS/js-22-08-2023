//об'єкт fetch - проміс Promise
//Promise отримує коллбек функцію

//1. стан pending - чекає свого виконання
//2. стан успішно\неуспішно

//resolve - функція успішного виконання
//reject - функція неуспішного виконання

/*
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("+")
    }, 3000)
    setTimeout(() => {
        reject("-")
    }, 3000)

    pro.then((info)=>{ //info - функція оброблювальник, здебільшого одна
        console.log(info)
    }).catch(()=>{})
    //then - якщо успішне виконання
    //catch - якщо неуспішне виконання
});
*/

/*
const req = fetch(url);
//дані всередині фетчА автоматично записуються в promise

req.then((data)=>{
    return data.json(); //об'єкт
}).then(data => {
    console.log(data);
})
*/
    
const req = async function (url) { //асинхронні функції
    const data = await fetch(url); //await - чекати відповідь 
    if(data.status===200){
        return data.json();
    }else{
        throw new Error("Fetch error");
    }
}
req(url)
.then((data) => {
    console.log(data);
})