b=[1];
let newArray = b.concat(2,3, [4,5, [6,7]]); //1,2,3,4,5,[6,7]

//toString() - метод js для масива для виведення на сторінку (стандартне представлення масиву)


//reverse() - міняє назавжди
let array1 = [1,2,3,4,5]
console.log(array1.reverse());
console.log(array1);

//slice(з цього індекса, до цього індекса не включно) - скопіювати елементи - не рухає сам масив
let array2 = [1,2,3,4,5];
let copied = array2.slice(0,2); //1,2
let copied2 = array2.slice(3); //з третього індекса і до кінця
let copied3 = array2.slice(1,-1); //2,3,4 з першого індекса до передостаннього
console.log(copied3);

//splice(від, скільки елементів видалено, значення для вставки) - видаляє елемени, змінює масив
let array3 = [1,2,3,4,5];
array2.splice(0,2,56); //56,4,5 залишились

//Array.isArray(тут дані) - перевірити чи масив
console.log(Array.isArray(2)); //false
console.log(Array.isArray([2])); //true

//sort() - сортування