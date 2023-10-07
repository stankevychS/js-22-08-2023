//dom_level_0 - старіший
//події on- (onclick, onload etc)

//dom_level_2 - новіший
//.addEventListener()
a.addEventListener()

//.removeEventListener()
a.removeEventListener()

//.addEventListener(подія, обробник події, true/false - чи потрібен перехват)

//true - перехвату
//false - всплиття
        // На этапе ПЕРЕХВАТА событие распространяется от Document вниз до целевого элемента управления.
        // Второй этап - СОБЫТИЕ В ЦЕЛЕВОМ УЗЛЕ.
        // На третьем этапе событие ВСПЛЫВАЕТ от целевого элемента обратно вверх до корневого элемента.

        // последний параметр в методе addEventListener - 
        // true - обработать событие на этапе ПЕРЕХВАТА
        // false - обработать событие на этапе ВСПЛЫВАНИЕ


//window.onload => (краще) window, подія "DOMContentLoaded"
//очікує завантаження всієї сторінки\очікує завантаження тільки дом-дерева

//dom-level-1 
//(колекції) - не використовується
//document.images - всі картинки 
//document.forms[0] - перша форма

//.preventDefault() - відміна дії за замовчуванням
//наприклад, з контекст меню, яке за замовчуванням при кліку правої кнопки мишки
a.removeEventListener('подія', function () {
    if (умова) {
        a.preventDefault();
    }
})

//.stopPropagation() - обрубка події, не використовувати

//.addEventListener('event', (e) => {
//})
 // e - объект события которое возникло в элементе wrapper или в его дочерних элементах
//e - об'єкт події, ініціатор
//e.target = event.target

// удаление обработчика handler с кнопки с id button1
btn1.removeEventListener("click", funcName, false);