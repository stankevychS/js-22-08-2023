//ПОДІЇ МИШКИ

//("mouseover") - наведення мишки на елемент
//.onmouseout

//.onmousemove - заходимо на елемент і рухаємо мишкою, при кожному русі спрацьовує

//.on ("mousedown") - натиснули
//.onmouseup - відпустили

//e.clientX - координата мишки по осі x відносно краю бразуера
//e.clientY - координата мишки по осі y відносно краю бразуера

//e.offsetX - координата відносно елементу
//e.offsetY - координата відносно елементу
//e.layerX - аналог offsetX
//e.layerY - аналог offsetY


//ПОДІЇ КЛАВІАТУРИ

//.on ("keydown") - будь-який натиск кнопки
//.onkeyup - будь-який відпуск кнопки
//.onkeypress - будь-який натиск на букву, пробіл чи цифру (те, що можна написати в документі)

//e.altKey - якщо натиснуто alt, тоді true
//e.ctrlKey - якщо натиснуто ctrl, тоді true
//e.shiftKey - якщо натиснуто shift, тоді true

//e.key - символ
//e.code - унікальний код для символа, назва кнопки (будь-якої мовної розкладки)
//w=ц=keyW


//e.key - отримуєм символ НОВИЙ СПОСІБ
//e.keyCode - зчитати точний код кнопки СТАРИЙ СПОСІБ
//String.fromCharCode(e.keyCode) - вивести як звичний символ


//ПОДІЇ ІНПУТІВ

//("change") - змінюється (щось вводиться)\реагує на зміни, коли вже спрацювало введення
//("focus") - натиснуто
//("blur") - фокус втратився
//("input") - зміни в елементі в реальному часі