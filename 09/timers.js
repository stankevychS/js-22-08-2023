//BOM - дерево
//взаэмодыя з браузером користувача

//setTiemout - планує логіку. яка спрацює потім
//setTimeout(function(){},time-milisec)
setTimeout(() => { //функція
    console.log("5 секунд");
}, 5000);
//відмінити Timeout
//clearTimeout('назва змінної, в якій записаний тайм аут



//setInterval - запускається з певною періодичністю
let inter = setInterval(() => {
    console.log("кожні 1 сек");
}, 1000);
//clearInterval('назва змінної, в якій записаний інтервал
clearInterval(inter); //зупинили