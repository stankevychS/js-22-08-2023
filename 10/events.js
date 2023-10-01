//dom_level_0 - старіший
//події on- (onclick, onload etc)

//dom_level_2 - новіший
//.addEventListener()
a.addEventListener()

//.removeEventListener()
a.removeEventListener()

//.addEventListener(подія, обробник події, true/false)

//true - перехвату
//false - всплиття

//window.onload => (краще) window, подія "DOMContentLoaded"
//очікує завантаження всієї сторінки\очікує завантаження тільки дом-дерева

//dom-level-1 
//(колекції) - не використовується
//document.images - всі картинки 
//document.forms[0] - перша форма

//.preventDefault() - відміна дії за замовчуванням
a.removeEventListener('подія', function () {
    if (умова) {
        a.preventDeafault();
    }
})

//.stopPropagation() - обрубка події, не використовувати

//.addEventListener('event', (e) => {
//})
//e - об'єкт події, ініціатор
//e.target = event.target